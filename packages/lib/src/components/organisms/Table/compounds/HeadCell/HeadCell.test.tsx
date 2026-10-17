import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { I_ColSchemaItem } from '../..';
import HeadCell from './index';

function renderHeadCell(col: I_ColSchemaItem) {
  return render(
    <table>
      <thead>
        <tr>
          <HeadCell col={col} />
        </tr>
      </thead>
    </table>,
  );
}

describe('Table.HeadCell', () => {
  it('renders a column header', () => {
    renderHeadCell({ id: 'name', label: 'Name' });

    expect(screen.getByRole('columnheader')).toBeInTheDocument();
  });

  it('renders the column label', () => {
    renderHeadCell({ id: 'name', label: 'Name' });

    expect(screen.getByRole('columnheader')).toHaveTextContent('Name');
  });

  it('applies the column width', () => {
    renderHeadCell({ id: 'id', label: 'ID', width: '80px' });

    expect(screen.getByRole('columnheader')).toHaveStyle({ width: '80px' });
  });

  it('does not set a width when the column has none', () => {
    renderHeadCell({ id: 'name', label: 'Name' });

    expect(screen.getByRole('columnheader').style.width).toBe('');
  });

  it('renders an empty header for an empty label', () => {
    renderHeadCell({ id: 'icon', label: '' });

    expect(screen.getByRole('columnheader')).toBeEmptyDOMElement();
  });

  it('has a display name', () => {
    expect(HeadCell.displayName).toBe('Table.HeadCell');
  });
});
