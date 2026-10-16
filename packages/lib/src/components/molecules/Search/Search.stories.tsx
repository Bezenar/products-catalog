import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn, expect, waitFor } from 'storybook/test';
import Search, { type ISearch } from './index';

type T_SearchListItem = {
  id: string;
  name: string;
  product: { name: string };
  shortnames?: string[];
};

function StatefulSearch(props: ISearch<T_SearchListItem>) {
  const [value, setValue] = useState(props.value ?? '');

  return (
    <Search
      {...props}
      value={value}
      onChange={(selectedValue) => {
        setValue(selectedValue);
        props.onChange(selectedValue);
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
      description: 'Initial text used to populate the search field.',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
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
    options: {
      control: false,
      description: 'Items filtered by their product name and displayed in the results list.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'T[]' } },
    },
    onChange: {
      action: 'result selected',
      control: false,
      description: 'Called with the selected result product name.',
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
    options: [
      { id: '1', name: 'Router', product: { name: 'Dream Router' }, shortnames: ['UDR'] },
      { id: '2', name: 'Switch', product: { name: 'Switch 8' } },
    ],
    onChange: fn(),
  },
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

    await step('With non-empty value should show options', async () => {
      await userEvent.type(canvas.getByRole('textbox', { name: args.label }), 'dream');

      await waitFor(() => expect(canvas.getByTestId('popover-content')).toBeVisible());
    });

    await step('Should show matching product name and shortname', async () => {
      await expect(canvas.getByTestId('primary-text')).toHaveTextContent('Dream Router');
    });

    await step('Should notify when a result is selected', async () => {
      await userEvent.click(canvas.getByTestId('primary-text'));

      await expect(args.onChange).toHaveBeenCalledWith('Dream Router');
    });

    await step('Should close the results after selection', async () => {
      await waitFor(() => expect(canvas.getByTestId('popover-content')).not.toBeVisible());
    });
  },
};
