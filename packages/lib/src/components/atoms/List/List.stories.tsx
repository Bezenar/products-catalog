import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import List from './index';

const meta = {
  title: 'Components/Atoms/List',
  component: List<{ id: number; name: string }>,
  argTypes: {
    items: {
      control: false,
      description: 'Array of items to be rendered in the list',
      table: {
        type: { summary: 'Array<T extends { id: any }>' },
      },
    },
    renderItem: {
      control: false,
      description: 'Function to render each item in the list',
      type: { name: 'function', required: true },
      table: {
        type: { summary: '(item: T) => React.ReactNode' },
      },
    },
  },
} satisfies Meta<typeof List<{ id: number; name: string }>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ],
    renderItem: fn((item) => <span data-testid="mocked">{item.name}</span>),
  },
  play: async ({ args, canvas, step }) => {
    await step('should render the list items correctly', async () => {
      for (const item of args.items) {
        await expect(canvas.getByText(item.name)).toBeInTheDocument();
      }
    });

    await step('should call renderItem for each item', async () => {
      await expect(args.renderItem).toHaveBeenCalledTimes(3);
    });

    await step('should render content by provided renderItem function', async () => {
      await expect(canvas.getAllByTestId('mocked')).toHaveLength(args.items.length);
    });
  },
};
