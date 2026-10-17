import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Cell from './index';

function renderCell(children: NonNullable<React.ReactNode>) {
  return render(
    <table>
      <tbody>
        <tr>
          <Cell>{children}</Cell>
        </tr>
      </tbody>
    </table>,
  );
}

describe('Table.Cell', () => {
  it('renders a table data cell', () => {
    renderCell('Dream Router');

    expect(screen.getByRole('cell')).toBeInTheDocument();
  });

  it('renders its children', () => {
    renderCell('Dream Router');

    expect(screen.getByRole('cell')).toHaveTextContent('Dream Router');
  });

  it('renders nested elements', () => {
    renderCell(<strong>Dream Router</strong>);

    expect(screen.getByText('Dream Router').tagName).toBe('STRONG');
  });
});
