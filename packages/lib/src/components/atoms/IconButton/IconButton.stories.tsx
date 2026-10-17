import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import { GridIcon, ListIcon } from '../../../assets/icons';
import IconButton from './index';

const meta = {
  title: 'Components/Atoms/IconButton',
  component: IconButton,
  argTypes: {
    ariaLabel: {
      control: 'text',
      type: { name: 'string', required: true },
      description: "Accessible label assigned to the button's aria-label attribute.",
      table: {
        type: { summary: 'String' },
      },
    },
    className: {
      control: 'text',
      type: { name: 'string', required: false },
      description: 'Additional class name applied to the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      description: 'Prevents the button from receiving interaction.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'select',
      options: ['Grid icon', 'List icon'],
      mapping: {
        'Grid icon': <GridIcon />,
        'List icon': <ListIcon />,
      },
      description: 'Content rendered inside the button.',
      type: { name: 'function', required: true },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onClick: {
      control: false,
      type: { name: 'function', required: true },
      description: 'Callback invoked when the button is clicked.',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'Grid icon label',
    children: 'Grid icon',
    onClick: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Calls onClick when the button is clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Grid icon label' }));

      expect(args.onClick).toHaveBeenCalledOnce();
    });
  },
};

export const Disabled: Story = {
  args: {
    ariaLabel: 'Disabled grid view',
    children: 'Grid icon',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Renders disabled', async () => {
      expect(canvas.getByRole('button', { name: args.ariaLabel })).toBeDisabled();
    });

    await step('Does not call onClick when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.ariaLabel }));

      expect(args.onClick).not.toHaveBeenCalled();
    });
  },
};

export const WithCustomClass: Story = {
  args: {
    ariaLabel: 'Custom grid view',
    children: 'Grid icon',
    className: 'custom-icon-button',
    isActive: true,
    activeClass: 'active-class',
    onClick: fn(),
  },
  play: async ({ canvas, step, args }) => {
    await step('Applies the custom and active classes', async () => {
      expect(canvas.getByRole('button', { name: args.ariaLabel })).toHaveClass(
        args.className!,
        args.activeClass!,
      );
    });
  },
};
