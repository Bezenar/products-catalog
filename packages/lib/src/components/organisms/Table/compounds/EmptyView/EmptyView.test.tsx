import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import EmptyView from './index';

function renderEmptyView(colspan: number) {
  return render(
    <table>
      <tbody>
        <EmptyView colspan={colspan} />
      </tbody>
    </table>,
  );
}

describe('Table.EmptyView', () => {
  it('renders the empty message', () => {
    renderEmptyView(3);

    expect(screen.getByRole('cell', { name: 'No data available' })).toBeInTheDocument();
  });

  it('renders a single row', () => {
    renderEmptyView(3);

    expect(screen.getAllByRole('row')).toHaveLength(1);
  });

  it.each([1, 3, 5])('spans %i columns', (colspan) => {
    renderEmptyView(colspan);

    expect(screen.getByRole('cell')).toHaveAttribute('colspan', String(colspan));
  });
});
