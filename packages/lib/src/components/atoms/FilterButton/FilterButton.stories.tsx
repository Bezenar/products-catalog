import type { Meta, StoryObj } from '@storybook/react';
import { fn, expect } from 'storybook/test';
import FilterButton from './index';

const meta: Meta<typeof FilterButton> = {
  title: 'Components/Atoms/FilterButton',
  component: FilterButton,
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the filter button',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the filter button is active',
      type: { name: 'boolean', required: false },
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClick: {
      action: 'clicked',
      control: false,
      description: 'The click handler for the filter button',
      type: { name: 'function', required: false },
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const Default: Story = {
  args: {
    label: 'Filter',
    isActive: false,
    onClick: fn(),
  },
  play: async ({ args, step, canvas, userEvent }) => {
    await step('Should render provided label', async () => {
      expect(canvas.getByRole('button', { name: args.label })).toBeTruthy();
    });

    await step('Should not be active', async () => {
      expect(canvas.getByRole('button', { name: args.label })).not.toHaveClass('active');
    });

    await step('Click the filter button should trigger onClick', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.label }));
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Active: Story = {
  args: {
    label: 'Filter',
    isActive: true,
    onClick: fn(),
  },
  play: async ({ args, step, canvas, userEvent }) => {
    await step('Should render provided label', async () => {
      expect(canvas.getByRole('button', { name: args.label })).toBeTruthy();
    });

    await step('Should be active', async () => {
      expect(canvas.getByRole('button', { name: args.label })).toHaveClass('active');
    });

    await step('Click the filter button should trigger onClick', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.label }));
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};
