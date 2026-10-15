import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import SearchListItem from './index';

const meta = {
  title: 'Components/Atoms/SearchListItem',
  component: SearchListItem,
  argTypes: {
    primaryText: {
      control: 'text',
      description: 'Primary text of the search list item',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    secondaryText: {
      control: 'text',
      description: 'Secondary text of the search list item',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      control: undefined,
      description: 'Click handler for the search list item',
      type: { name: 'function', required: false },
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof SearchListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryText: 'Dream Router',
    onClick: fn(),
  },
  play: async ({ userEvent, args, canvas, step }) => {
    await step('should render provided primary text', async () => {
      await expect(canvas.getByText(args.primaryText)).toBeInTheDocument();
    });

    await step('should trigger onClick when clicked', async () => {
      await userEvent.click(canvas.getByText(args.primaryText));

      expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const WithSecondaryText: Story = {
  args: {
    primaryText: 'Dream Router',
    secondaryText: 'UDR',
    onClick: fn(),
  },
  play: async ({ userEvent, args, canvas, step }) => {
    await step('should render provided primary text', async () => {
      await expect(canvas.getByText(args.primaryText)).toBeInTheDocument();
    });

    await step('should render provided secondary text', async () => {
      await expect(canvas.getByText(args.secondaryText!)).toBeInTheDocument();
    });

    await step('should trigger onClick when clicked', async () => {
      await userEvent.click(canvas.getByText(args.primaryText));

      expect(args.onClick).toHaveBeenCalled();
    });
  },
};
