import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import Table, { type I_ColSchemaItem } from './index';

type Device = { id: string; line: string; name: string };

const colSchema: I_ColSchemaItem[] = [
  { id: 'id', label: 'ID', width: '80px' },
  { id: 'line', label: 'Product line' },
  { id: 'name', label: 'Name' },
];

const items: Device[] = [
  { id: '1', line: 'Network', name: 'Dream Router' },
  { id: '2', line: 'Network', name: 'Switch 8' },
  { id: '3', line: 'Protect', name: 'Camera' },
];

const renderCells = (device: Device) => (
  <>
    <Table.Cell>{device.id}</Table.Cell>
    <Table.Cell>{device.line}</Table.Cell>
    <Table.Cell>{device.name}</Table.Cell>
  </>
);

const onRowClick = fn();

const meta = {
  title: 'Components/Organisms/Table',
  component: Table<Device>,
  parameters: {
    docs: {
      description: {
        component:
          'Renders a table from a column schema and a list of items. Compose rows with `Table.Row` or ' +
          '`Table.InteractiveRow`, cells with `Table.Cell`, and the empty state with `Table.EmptyView`. ' +
          'See the Usage page for details.',
      },
    },
  },
  argTypes: {
    colSchema: {
      control: false,
      description: 'Column definitions used to render the header cells.',
      type: { name: 'other', value: '', required: true },
      table: {
        type: {
          summary: 'I_ColSchemaItem[]',
          detail:
            'interface I_ColSchemaItem {\n' +
            '  id: string;\n' +
            '  label: string;\n' +
            '  width?: React.CSSProperties["width"];\n' +
            '}',
        },
      },
    },
    items: {
      control: false,
      description: 'Items to render. Each item must have a string `id`.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'T[]' } },
    },
    rowRender: {
      control: false,
      description: 'Called once per item to render its row. The returned element needs a `key`.',
      type: { name: 'function', required: true },
      table: { type: { summary: '(item: T) => React.ReactNode' } },
    },
    emptyView: {
      control: false,
      description: 'Rendered in the table body instead of rows when `items` is empty.',
      type: { name: 'other', value: '', required: false },
      table: { type: { summary: 'React.ReactNode' } },
    },
  },
  args: {
    colSchema,
    items,
    rowRender: (device) => <Table.Row key={device.id}>{renderCells(device)}</Table.Row>,
  },
} satisfies Meta<typeof Table<Device>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await step('Should render a column header for each schema item', async () => {
      expect(canvas.getAllByRole('columnheader')).toHaveLength(colSchema.length);
    });

    await step('Should apply the configured column width', async () => {
      expect(canvas.getByRole('columnheader', { name: 'ID' })).toHaveStyle({ width: '80px' });
    });

    await step('Should render a body row for each item', async () => {
      // One header row plus one row per item.
      expect(canvas.getAllByRole('row')).toHaveLength(items.length + 1);
    });
  },
};

export const WithInteractiveRows: Story = {
  args: {
    rowRender: (device) => (
      <Table.InteractiveRow key={device.id} onClick={() => onRowClick(device.id)}>
        {renderCells(device)}
      </Table.InteractiveRow>
    ),
  },
  beforeEach: () => {
    onRowClick.mockClear();
  },
  play: async ({ canvas, step, userEvent }) => {
    await step('Should make rows keyboard focusable', async () => {
      expect(canvas.getAllByRole('row')[1]).toHaveAttribute('tabindex', '0');
    });

    await step('Should call onClick when a row is clicked', async () => {
      await userEvent.click(canvas.getByText('Dream Router'));

      expect(onRowClick).toHaveBeenLastCalledWith('1');
    });

    await step('Should call onClick when Enter is pressed on a focused row', async () => {
      canvas.getAllByRole('row')[2].focus();
      await userEvent.keyboard('{Enter}');

      expect(onRowClick).toHaveBeenLastCalledWith('2');
    });
  },
};

export const WithEmptyView: Story = {
  args: {
    items: [],
    emptyView: <Table.EmptyView colspan={colSchema.length} />,
  },
  play: async ({ canvas, step }) => {
    await step('Should show the empty message', async () => {
      expect(canvas.getByText('No data available')).toBeVisible();
    });

    await step('Should span every column', async () => {
      expect(canvas.getByText('No data available')).toHaveAttribute(
        'colspan',
        String(colSchema.length),
      );
    });

    await step('Should keep the column headers', async () => {
      expect(canvas.getAllByRole('columnheader')).toHaveLength(colSchema.length);
    });
  },
};
