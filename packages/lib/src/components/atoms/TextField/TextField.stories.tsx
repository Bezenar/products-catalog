import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect, waitFor } from 'storybook/test';
import { SearchIcon } from '../../../assets/icons';
import TextField from './index';

const meta = {
  title: 'Components/Atoms/TextField',
  component: TextField,
  argTypes: {
    value: {
      control: 'text',
      description: 'The value of the text field',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'select',
      options: ['Search icon', 'none'],
      mapping: {
        'Search icon': <SearchIcon />,
        none: null,
      },
      description: 'Content rendered inside the button.',
      type: { name: 'function', required: false },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text of the text field',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
      },
    },
    debounceMs: {
      control: { type: 'number', min: 0 },
      description: 'Optional delay in milliseconds before onChange is called.',
      type: { name: 'number', required: false },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined (immediate)' },
      },
    },
    width: {
      control: 'text',
      description: 'CSS width value, such as 320px, 50%, or auto.',
      type: { name: 'other', value: 'React.CSSProperties["width"]', required: false },
      table: {
        type: { summary: 'React.CSSProperties["width"]' },
        defaultValue: { summary: '100%' },
      },
    },
    onChange: {
      action: 'changed',
      control: false,
      description: 'Callback function when the value changes',
      type: { name: 'function', required: true },
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('should use value prop correctly', async () => {
      await expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });

    await step('should not display placeholder', () => {
      expect(canvas.getByRole('textbox')).not.toHaveAttribute('placeholder');
    });

    await step('should not display icon', () => {
      expect(canvas.getByRole('textbox').previousSibling).toBeNull();
    });

    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');

      await expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
  },
};

export const WithPlaceholder: Story = {
  args: {
    value: '',
    placeholder: 'Enter text',
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('should use value prop correctly', async () => {
      await expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });

    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });

    await step('should not display icon', () => {
      expect(canvas.getByRole('textbox').previousSibling).toBeNull();
    });

    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');

      await expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
  },
};

export const WithIcon: Story = {
  args: {
    value: '',
    icon: <SearchIcon />,
    placeholder: 'Enter text',
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('should use value prop correctly', async () => {
      await expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });

    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });

    await step('should display icon', () => {
      expect(canvas.getByRole('textbox').previousSibling).toContainHTML('<svg');
    });

    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');

      await expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
  },
};

export const WithCustomWidth: Story = {
  args: {
    value: '',
    placeholder: '320px wide',
    width: '320px',
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should apply custom width', async () => {
      expect(canvas.getByTestId('text-field')).toHaveStyle({ width: args.width });
    });

    await step('should use value prop correctly', async () => {
      await expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });

    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });

    await step('should not display icon', () => {
      expect(canvas.getByRole('textbox').previousSibling).toBeNull();
    });

    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');

      await expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
  },
};

export const Debounced: Story = {
  args: {
    value: '',
    placeholder: 'Type to search',
    debounceMs: 300,
    onChange: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('should use value prop correctly', async () => {
      await expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });

    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });

    await step('should not display icon', () => {
      expect(canvas.getByRole('textbox').previousSibling).toBeNull();
    });

    await step('On change should trigger onChange callback with debounce', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');

      await waitFor(() => {
        expect(args.onChange).toHaveBeenCalledWith('Hello');
      });
    });
  },
};
