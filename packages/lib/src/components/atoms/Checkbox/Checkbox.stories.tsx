import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import Checkbox from './index';

const meta = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: {
      control: 'boolean',
      description: 'Checkbox state',
      type: { name: 'boolean', required: true },
      table: {
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: 'text',
      description: 'Checkbox label',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      control: undefined,
      description: 'Fired function on checkbox change',
      table: {
        type: { summary: '(nextValue: boolean) => void' },
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: false,
    label: 'check me',
    onChange: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step('Should render label', () => {
      expect(canvas.getByTestId('checkbox-label')).toHaveTextContent(args.label);
    });

    await step("Shouldn't be active", async () => {
      expect(canvas.getByTestId('checkbox-box')).not.toHaveClass('active');
    });

    await step('Should call onChange function', async () => {
      await userEvent.click(canvas.getByRole('checkbox', { hidden: true }));

      expect(args.onChange).toHaveBeenCalledWith(!args.isChecked);
    });
  },
};

export const Active: Story = {
  args: {
    isChecked: true,
    label: 'check me',
    onChange: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step('Should render label', () => {
      expect(canvas.getByTestId('checkbox-label')).toHaveTextContent(args.label);
    });

    await step('Should be active', async () => {
      expect(canvas.getByTestId('checkbox-box')).toHaveClass('active');
    });

    await step('Should call onChange function', async () => {
      await userEvent.click(canvas.getByRole('checkbox', { hidden: true }));

      expect(args.onChange).toHaveBeenCalledWith(!args.isChecked);
    });
  },
};
