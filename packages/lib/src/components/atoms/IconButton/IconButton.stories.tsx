import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import { GridIcon, ListIcon } from '../../../assets/icons';
import IconButton from './index';

const meta = {
  title: 'Components/IconButton',
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
    isActive: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      description: 'Controls whether the button is active.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    activeClass: {
      control: 'text',
      type: { name: 'string', required: false },
      description: 'Class added to the button when isActive is true.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Empty string' },
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
      control: undefined,
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
    activeClass: 'not-visible',
    children: 'Grid icon',
    onClick: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Calls onClick when the button is clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Grid icon label' }));

      await expect(args.onClick).toHaveBeenCalledOnce();
    });

    await step('Does not apply activeClass when isActive is falsy', async () => {
      if (args.activeClass) {
        const button = canvas.getByRole('button', { name: 'Grid icon label' });

        expect(button.classList.contains(args.activeClass)).toBeFalsy();
      }
    });
  },
};

export const Active: Story = {
  args: {
    ariaLabel: 'List icon label',
    isActive: true,
    activeClass: 'active-class',
    children: 'List icon',
    onClick: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Calls onClick when the button is clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'List icon label' }));

      await expect(args.onClick).toHaveBeenCalledOnce();
    });

    await step('Applies activeClass when isActive is true', async () => {
      if (args.activeClass) {
        const button = canvas.getByRole('button', { name: 'List icon label' });

        expect(button.classList.contains(args.activeClass)).toBeTruthy();
      }
    });
  },
};
