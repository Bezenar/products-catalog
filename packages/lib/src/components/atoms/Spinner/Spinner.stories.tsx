import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Spinner from './index';

const meta = {
  title: 'Components/Atoms/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'md', 'sm'],
      description: 'Display size based on the loading context.',
      type: { name: 'enum', value: ['xl', 'md', 'sm'], required: false },
      table: {
        type: { summary: "'xl' | 'md' | 'sm'" },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'Optional visible loading text and accessible status name. Defaults to Loading.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Loading' },
      },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status', { name: 'Loading' })).toBeVisible();
    await expect(canvas.getByText('Loading')).toBeVisible();
  },
};

export const XLSpinner: Story = {
  args: {
    size: 'xl',
    label: 'Loading products',
  },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('status', { name: args.label })).toBeVisible();
    await expect(canvas.getByText(args.label)).toBeVisible();
  },
};

export const MDSpinner: Story = {
  args: {
    size: 'md',
    label: 'Loading category',
  },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('status', { name: args.label })).toBeVisible();
    await expect(canvas.getByText(args.label)).toBeVisible();
  },
};

export const SMSpinner: Story = {
  args: {
    size: 'sm',
    label: 'Loading items',
  },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('status', { name: args.label })).toBeVisible();
    await expect(canvas.getByText(args.label)).toBeVisible();
  },
};
