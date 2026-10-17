import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Row from './index';

function renderRow(children: NonNullable<React.ReactNode> = <></>) {
  return render(
    <table>
      <tbody>
        <Row>{children}</Row>
      </tbody>
    </table>,
  );
}

describe('Table.Row', () => {
  it('renders a table row', () => {
    renderRow();

    expect(screen.getByRole('row')).toBeInTheDocument();
  });

  it('renders its children', () => {
    renderRow(<td>Dream Router</td>);

    expect(screen.getByRole('cell', { name: 'Dream Router' })).toBeInTheDocument();
  });

  it('is not focusable', () => {
    renderRow();

    expect(screen.getByRole('row')).not.toHaveAttribute('tabindex');
  });

  it('has a display name', () => {
    expect(Row.displayName).toBe('Table.Row');
  });
});
