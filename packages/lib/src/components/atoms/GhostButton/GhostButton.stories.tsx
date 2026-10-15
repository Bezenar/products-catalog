import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import GhostButton from './index';

const meta = {
  title: 'Components/Atoms/GhostButton',
  component: GhostButton,
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the GhostButton',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      control: undefined,
      description: 'The onClick handler for the GhostButton',
      type: { name: 'function', required: true },
      table: {
        type: { summary: '() => void' },
      },
    },
  },
} satisfies Meta<typeof GhostButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click me',
    onClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step('Should render button label', async () => {
      await expect(canvas.getByRole('button', { name: args.label })).toBeInTheDocument();
    });

    await step('Click the GhostButton', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.label }));

      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
