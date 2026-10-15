import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import LogoButton from './index';

const meta = {
  title: 'Components/Atoms/LogoButton',
  parameters: { layout: 'centered' },
  component: LogoButton,
  argTypes: {
    ariaLabel: {
      control: 'text',
      type: { name: 'string', required: true },
      description: 'Text which will be assigned to button aria label attribute',
      table: {
        type: { summary: 'String' },
      },
    },
    onClick: {
      control: undefined,
      type: { name: 'function', required: true },
      description: 'Fired function on button click',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
} satisfies Meta<typeof LogoButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'Logo button',
    onClick: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Logo button' }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
