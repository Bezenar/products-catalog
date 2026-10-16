import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import Header from './index';

const meta = {
  title: 'Components/Molecules/Header',
  component: Header,
  argTypes: {
    title: {
      control: 'text',
      description: 'Primary page title displayed in the header.',
      type: { name: 'string', required: true },
      table: { type: { summary: 'string' } },
    },
    author: {
      control: 'text',
      description: 'Author or attribution displayed at the end of the header.',
      type: { name: 'other', value: 'React.ReactNode', required: true },
      table: { type: { summary: 'React.ReactNode' } },
    },
    logoAriaLabel: {
      control: 'text',
      description: 'Accessible name for the logo button.',
      type: { name: 'string', required: true },
      table: { type: { summary: 'string' } },
    },
    onLogoClick: {
      action: 'logo clicked',
      control: false,
      description: 'Called when the logo button is clicked.',
      type: { name: 'function', required: true },
      table: { type: { summary: '() => void' } },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Product catalog',
    author: 'Ubiquiti',
    logoAriaLabel: 'Go to home',
    onLogoClick: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should render title', async () => {
      expect(canvas.getByText(args.title)).toBeInTheDocument();
    });
    await step('Should render author', async () => {
      expect(canvas.getByText(args.author as string)).toBeInTheDocument();
    });

    await step('Should render logo button', async () => {
      expect(canvas.getByRole('button', { name: args.logoAriaLabel })).toBeInTheDocument();
    });

    await step('Should expose and handle the logo button', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.logoAriaLabel }));
      expect(args.onLogoClick).toHaveBeenCalledOnce();
    });
  },
};
