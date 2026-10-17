import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Badge from './index';

const meta = {
  title: 'Components/Organisms/ProductCard/Compounds/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'A compact label positioned at the upper-right corner of a ProductCard.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Badge content; accepts any React node.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'React.ReactNode' } },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 'New' },
  play: async ({ args, canvas, step }) => {
    await step('Should render the supplied badge value', async () => {
      expect(canvas.getByText(args.value as string)).toBeVisible();
    });
  },
};
