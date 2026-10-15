import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn, expect, waitFor } from 'storybook/test';
import Search, { type ISearch } from './index';

type SearchOption = { id: React.Key; name: string };

function StatefulSearch(props: ISearch<SearchOption>) {
  const [value, setValue] = useState(props.value);

  return (
    <Search
      {...props}
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
        props.onChange(nextValue);
      }}
    />
  );
}

const meta = {
  title: 'Components/Molecules/Search',
  component: StatefulSearch,
  argTypes: {
    value: {
      control: 'text',
      description: 'Current controlled search value.',
      type: { name: 'string', required: true },
      table: { type: { summary: 'string' } },
    },
    label: {
      control: 'text',
      description: 'Accessible label for the search field.',
      type: { name: 'string', required: true },
      table: { type: { summary: 'string' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder shown while the search field is empty and unfocused.',
      type: { name: 'string', required: true },
      table: { type: { summary: 'string' } },
    },
    debounceMs: {
      control: { type: 'number' },
      description: 'Delay in milliseconds before onChange is called.',
      type: { name: 'number', required: false },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
    },
    options: {
      control: false,
      description: 'Items displayed in the popover list.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'T[]' } },
    },
    optionRenderer: {
      control: false,
      description: 'Renders an option in the popover list.',
      type: { name: 'function', required: true },
      table: { type: { summary: '(option: <T>) => React.ReactNode' } },
    },
    popoverWidth: {
      control: 'text',
      description: 'Optional CSS width override; defaults to the input width.',
      type: { name: 'other', value: 'React.CSSProperties["width"]', required: false },
      table: {
        type: { summary: 'React.CSSProperties["width"]' },
        defaultValue: { summary: 'matches input width' },
      },
    },
    popoverMaxHeight: {
      control: 'text',
      description: 'Optional CSS maximum height for the popover.',
      type: { name: 'other', value: 'React.CSSProperties["maxHeight"]', required: false },
      table: {
        type: { summary: 'React.CSSProperties["maxHeight"]' },
        defaultValue: { summary: '320px' },
      },
    },
    onChange: {
      action: 'changed',
      control: false,
      description: 'Called with the updated search value.',
      type: { name: 'function', required: true },
      table: { type: { summary: '(value: string) => void' } },
    },
  },
} satisfies Meta<typeof StatefulSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    label: 'Search devices',
    placeholder: 'Search...',
    options: [{ id: 1, name: 'Option 1' }],
    optionRenderer: (option) => <span data-testid="option">{option.name}</span>,
    onChange: fn(),
  },
  render: (args) => <StatefulSearch {...args} />,
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Should expose the provided accessible label', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toBeTruthy();
    });

    await step('Should render with provided value', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toHaveValue(args.value);
    });

    await step('Should render with provided placeholder', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toHaveAttribute(
        'placeholder',
        args.placeholder,
      );
    });

    await step('With empty value should hide options', async () => {
      await expect(canvas.getByTestId('popover-content')).not.toBeVisible();
    });

    await step('Should forward changed text to onChange', async () => {
      await userEvent.type(canvas.getByRole('textbox', { name: args.label }), 'New value');

      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith('New value'));
    });

    await step('With non-empty value should show options', async () => {
      await userEvent.type(canvas.getByRole('textbox', { name: args.label }), 'New value');

      await expect(canvas.getByTestId('popover-content')).toBeVisible();
    });

    await step('Should render custom option content', async () => {
      await expect(canvas.getByTestId('option')).toBeVisible();
    });

    await step('Should apply popover default max height', async () => {
      await expect(canvas.getByTestId('popover-content')).toHaveStyle({ maxHeight: '320px' });
    });
  },
};

export const WithCustomMaxHeight: Story = {
  args: {
    value: '',
    label: 'Search devices',
    placeholder: 'Search...',
    options: [{ id: 1, name: 'Option 1' }],
    optionRenderer: (option) => <span data-testid="option">{option.name}</span>,
    onChange: fn(),
    popoverMaxHeight: '500px',
  },
  render: (args) => <StatefulSearch {...args} />,
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Should expose the provided accessible label', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toBeTruthy();
    });

    await step('Should render with provided value', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toHaveValue(args.value);
    });

    await step('Should render with provided placeholder', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toHaveAttribute(
        'placeholder',
        args.placeholder,
      );
    });

    await step('With empty value should hide options', async () => {
      await expect(canvas.getByTestId('popover-content')).not.toBeVisible();
    });

    await step('Should forward changed text to onChange', async () => {
      await userEvent.type(canvas.getByRole('textbox', { name: args.label }), 'New value');

      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith('New value'));
    });

    await step('With non-empty value should show options', async () => {
      await userEvent.type(canvas.getByRole('textbox', { name: args.label }), 'New value');

      await expect(canvas.getByTestId('popover-content')).toBeVisible();
    });

    await step('Should render custom option content', async () => {
      await expect(canvas.getByTestId('option')).toBeVisible();
    });

    await step('Should apply custom popover max height', async () => {
      await expect(canvas.getByTestId('popover-content')).toHaveStyle({ maxHeight: '500px' });
    });
  },
};

export const WithCustomPopoverWidth: Story = {
  args: {
    value: '',
    label: 'Search devices',
    placeholder: 'Search...',
    options: [{ id: 1, name: 'Option 1' }],
    optionRenderer: (option) => <span data-testid="option">{option.name}</span>,
    onChange: fn(),
    popoverWidth: '300px',
  },
  render: (args) => <StatefulSearch {...args} />,
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Should expose the provided accessible label', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toBeTruthy();
    });

    await step('Should render with provided value', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toHaveValue(args.value);
    });

    await step('Should render with provided placeholder', async () => {
      await expect(canvas.getByRole('textbox', { name: args.label })).toHaveAttribute(
        'placeholder',
        args.placeholder,
      );
    });

    await step('With empty value should hide options', async () => {
      await expect(canvas.getByTestId('popover-content')).not.toBeVisible();
    });

    await step('Should forward changed text to onChange', async () => {
      await userEvent.type(canvas.getByRole('textbox', { name: args.label }), 'New value');

      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith('New value'));
    });

    await step('With non-empty value should show options', async () => {
      await userEvent.type(canvas.getByRole('textbox', { name: args.label }), 'New value');

      await expect(canvas.getByTestId('popover-content')).toBeVisible();
    });

    await step('Should render custom option content', async () => {
      await expect(canvas.getByTestId('option')).toBeVisible();
    });

    await step('Should apply popover default max height', async () => {
      await expect(canvas.getByTestId('popover-content')).toHaveStyle({ maxHeight: '320px' });
    });

    await step('Should apply custom popover width', async () => {
      await expect(canvas.getByTestId('popover-content')).toHaveStyle({ width: '300px' });
    });
  },
};
