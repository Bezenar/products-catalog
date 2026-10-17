import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { I_ColSchemaItem } from '../..';
import Head from './index';

const colSchema: I_ColSchemaItem[] = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
];

function renderHead(schema: I_ColSchemaItem[] = colSchema) {
  return render(
    <table>
      <Head colSchema={schema} />
    </table>,
  );
}

describe('Table.Head', () => {
  it('renders a table head', () => {
    renderHead();

    expect(screen.getAllByRole('rowgroup')).toHaveLength(1);
  });

  it('renders a single header row', () => {
    renderHead();

    expect(within(screen.getByRole('rowgroup')).getAllByRole('row')).toHaveLength(1);
  });

  it('renders a header cell for each column', () => {
    renderHead();

    expect(screen.getAllByRole('columnheader')).toHaveLength(colSchema.length);
  });

  it('renders the column labels in order', () => {
    renderHead();

    expect(screen.getAllByRole('columnheader').map((cell) => cell.textContent)).toEqual([
      'ID',
      'Name',
    ]);
  });

  it('renders no header cells for an empty schema', () => {
    renderHead([]);

    expect(screen.queryAllByRole('columnheader')).toHaveLength(0);
  });

  it('has a display name', () => {
    expect(Head.displayName).toBe('Table.Head');
  });
});
