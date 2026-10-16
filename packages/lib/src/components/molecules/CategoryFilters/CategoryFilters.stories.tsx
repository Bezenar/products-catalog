import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import CategoryFilters from './index';

type CategoryOption = { id: string; name: string };

const meta = {
  title: 'Components/Molecules/CategoryFilters',
  component: CategoryFilters<CategoryOption>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '> **NOTE:** Storybook renders stories inside an iframe, whose viewport can produce different ' +
          'fixed-position coordinates than the consuming application. This page intentionally documents the' +
          'API without embedding a live preview. You can check component stories in storybook.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed on the filter button.',
      type: { name: 'string', required: true },
      table: { type: { summary: 'string' } },
    },
    listHeading: {
      control: 'text',
      description: 'Optional heading displayed above the options.',
      type: { name: 'string', required: false },
      table: { type: { summary: 'string' } },
    },
    options: {
      control: false,
      description: 'Options rendered inside the filter popover.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'T[]' } },
    },
    renderOption: {
      control: false,
      description: 'Renders an option in the filter list.',
      type: { name: 'function', required: true },
      table: { type: { summary: '(option: T) => React.ReactNode' } },
    },
    onReset: {
      control: false,
      description: 'Optional Reset button configuration and click handler.',
      type: { name: 'other', value: '{ disabled: boolean; onClick: () => void }' },
      table: { type: { summary: '{ disabled: boolean; onClick: () => void }' } },
    },
  },
} satisfies Meta<typeof CategoryFilters<CategoryOption>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Category',
    options: [
      { id: '1', name: 'Routers' },
      { id: '2', name: 'Switches' },
      { id: '3', name: 'Access points' },
    ],
    renderOption: (option) => <span data-testid="category-filter-option">{option.name}</span>,
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should render the filter button', async () => {
      await expect(canvas.getByRole('button', { name: args.label })).toBeTruthy();
    });

    await step('On button click should open the popover', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.label }));

      await expect(canvas.getAllByTestId('category-filter-option')[0]).toBeVisible();
    });

    await step('Should not render the heading', async () => {
      await expect(canvas.queryByTestId('category-filter-heading')).not.toBeInTheDocument();
    });

    await step('Should not render the reset button', async () => {
      await expect(canvas.queryByTestId('category-filter-reset')).not.toBeInTheDocument();
    });
  },
};

export const WithListHeading: Story = {
  args: {
    label: 'Category',
    listHeading: 'Available Categories',
    options: [
      { id: '1', name: 'Routers' },
      { id: '2', name: 'Switches' },
      { id: '3', name: 'Access points' },
    ],
    renderOption: (option) => <span data-testid="category-filter-option">{option.name}</span>,
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should render the filter button', async () => {
      await expect(canvas.getByRole('button', { name: args.label })).toBeTruthy();
    });

    await step('On button click should open the popover', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.label }));

      await expect(canvas.getAllByTestId('category-filter-option')[0]).toBeVisible();
    });

    await step('Should render the heading', async () => {
      await expect(canvas.queryByTestId('category-filter-heading')).toBeInTheDocument();
    });

    await step('Should not render the reset button', async () => {
      await expect(canvas.queryByTestId('category-filter-reset')).not.toBeInTheDocument();
    });
  },
};

export const WithActiveResetButton: Story = {
  args: {
    label: 'Category',
    options: [
      { id: '1', name: 'Routers' },
      { id: '2', name: 'Switches' },
      { id: '3', name: 'Access points' },
    ],
    renderOption: (option) => <span data-testid="category-filter-option">{option.name}</span>,
    onReset: {
      disabled: false,
      onClick: fn(),
    },
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should render the filter button', async () => {
      await expect(canvas.getByRole('button', { name: args.label })).toBeTruthy();
    });

    await step('On button click should open the popover', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.label }));

      await expect(canvas.getAllByTestId('category-filter-option')[0]).toBeVisible();
    });

    await step('Should not render the heading', async () => {
      await expect(canvas.queryByTestId('category-filter-heading')).not.toBeInTheDocument();
    });

    await step('Should render the reset button', async () => {
      await expect(canvas.getByTestId('category-filter-reset')).toBeInTheDocument();
    });

    await step('Click on reset button should call onReset.onClick', async () => {
      await userEvent.click(canvas.getByTestId('category-filter-reset'));

      await expect(args.onReset!.onClick).toHaveBeenCalled();
    });
  },
};

export const WithDisabledResetButton: Story = {
  args: {
    label: 'Category',
    options: [
      { id: '1', name: 'Routers' },
      { id: '2', name: 'Switches' },
      { id: '3', name: 'Access points' },
    ],
    renderOption: (option) => <span data-testid="category-filter-option">{option.name}</span>,
    onReset: {
      disabled: true,
      onClick: fn(),
    },
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should render the filter button', async () => {
      await expect(canvas.getByRole('button', { name: args.label })).toBeTruthy();
    });

    await step('On button click should open the popover', async () => {
      await userEvent.click(canvas.getByRole('button', { name: args.label }));

      await expect(canvas.getAllByTestId('category-filter-option')[0]).toBeVisible();
    });

    await step('Should not render the heading', async () => {
      await expect(canvas.queryByTestId('category-filter-heading')).not.toBeInTheDocument();
    });

    await step('Should render the reset button', async () => {
      await expect(canvas.getByTestId('category-filter-reset')).toBeInTheDocument();
    });

    await step('Should render the reset button as disabled', async () => {
      await expect(canvas.getByTestId('category-filter-reset')).toBeDisabled();
    });

    await step('Click on reset button should not call onReset.onClick', async () => {
      await userEvent.click(canvas.getByTestId('category-filter-reset'));

      await expect(args.onReset!.onClick).not.toHaveBeenCalled();
    });
  },
};
