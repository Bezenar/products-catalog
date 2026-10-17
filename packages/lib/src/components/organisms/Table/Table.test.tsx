import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Table, { type I_ColSchemaItem } from './index';

type Device = { id: string; name: string };

const colSchema: I_ColSchemaItem[] = [
  { id: 'id', label: 'ID', width: '80px' },
  { id: 'name', label: 'Name' },
];

const items: Device[] = [
  { id: '1', name: 'Dream Router' },
  { id: '2', name: 'Switch 8' },
];

const rowRender = (device: Device) => (
  <Table.Row key={device.id}>
    <Table.Cell>{device.id}</Table.Cell>
    <Table.Cell>{device.name}</Table.Cell>
  </Table.Row>
);

function renderTable(props: Partial<React.ComponentProps<typeof Table<Device>>> = {}) {
  return render(
    <Table<Device> colSchema={colSchema} items={items} rowRender={rowRender} {...props} />,
  );
}

describe('Table', () => {
  it('renders a table element', () => {
    renderTable();

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders a header cell for each column in the schema', () => {
    renderTable();

    expect(screen.getAllByRole('columnheader')).toHaveLength(colSchema.length);
  });

  it('renders the header labels in schema order', () => {
    renderTable();

    expect(screen.getAllByRole('columnheader').map((cell) => cell.textContent)).toEqual([
      'ID',
      'Name',
    ]);
  });

  it('applies the column width to its header cell', () => {
    renderTable();

    expect(screen.getByRole('columnheader', { name: 'ID' })).toHaveStyle({ width: '80px' });
  });

  it('renders the header row inside the table head', () => {
    renderTable();

    expect(within(screen.getAllByRole('rowgroup')[0]).getAllByRole('columnheader')).toHaveLength(
      colSchema.length,
    );
  });

  it('renders one body row per item', () => {
    renderTable();

    expect(within(screen.getAllByRole('rowgroup')[1]).getAllByRole('row')).toHaveLength(
      items.length,
    );
  });

  it('renders the row content returned by rowRender', () => {
    renderTable();

    expect(screen.getByRole('cell', { name: 'Dream Router' })).toBeInTheDocument();
  });

  it('calls rowRender for every item in order', () => {
    renderTable();

    expect(
      within(screen.getAllByRole('rowgroup')[1])
        .getAllByRole('row')
        .map((row) => row.textContent),
    ).toEqual(['1Dream Router', '2Switch 8']);
  });

  it('renders the empty view instead of rows when there are no items', () => {
    renderTable({ items: [], emptyView: <Table.EmptyView colspan={colSchema.length} /> });

    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('does not render the empty view when there are items', () => {
    renderTable({ emptyView: <Table.EmptyView colspan={colSchema.length} /> });

    expect(screen.queryByText('No data available')).not.toBeInTheDocument();
  });

  it('does not render item rows when there are no items', () => {
    renderTable({ items: [], emptyView: <Table.EmptyView colspan={colSchema.length} /> });

    expect(screen.queryByRole('cell', { name: 'Dream Router' })).not.toBeInTheDocument();
  });

  it('keeps the header when there are no items', () => {
    renderTable({ items: [] });

    expect(screen.getAllByRole('columnheader')).toHaveLength(colSchema.length);
  });

  it('renders an empty body when there are no items and no empty view', () => {
    renderTable({ items: [] });

    expect(within(screen.getAllByRole('rowgroup')[1]).queryAllByRole('row')).toHaveLength(0);
  });

  it('exposes the compound components', () => {
    expect([Table.Row, Table.InteractiveRow, Table.Cell, Table.EmptyView].every(Boolean)).toBe(
      true,
    );
  });
});
