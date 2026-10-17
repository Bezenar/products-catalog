import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import InteractiveRow from './index';

function renderRow(onClick = vi.fn()) {
  render(
    <table>
      <tbody>
        <InteractiveRow onClick={onClick}>
          <td>Dream Router</td>
          <td>
            <input aria-label="Device name" />
          </td>
        </InteractiveRow>
      </tbody>
    </table>,
  );

  return { onClick, row: screen.getByRole('row') };
}

function pressKey(target: HTMLElement, key: string) {
  const event = createEvent.keyDown(target, { key });
  fireEvent(target, event);

  return event;
}

describe('Table.InteractiveRow', () => {
  it('renders a table row', () => {
    renderRow();

    expect(screen.getByRole('row')).toBeInTheDocument();
  });

  it('renders its children', () => {
    renderRow();

    expect(screen.getByRole('cell', { name: 'Dream Router' })).toBeInTheDocument();
  });

  it('is focusable with the keyboard', () => {
    const { row } = renderRow();

    expect(row).toHaveAttribute('tabindex', '0');
  });

  it('calls onClick when the row is clicked', () => {
    const { onClick, row } = renderRow();

    fireEvent.click(row);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when a cell inside the row is clicked', () => {
    const { onClick } = renderRow();

    fireEvent.click(screen.getByText('Dream Router'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when Enter is pressed on the row', () => {
    const { onClick, row } = renderRow();

    pressKey(row, 'Enter');

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('prevents the default action when Enter is pressed on the row', () => {
    const { row } = renderRow();

    expect(pressKey(row, 'Enter').defaultPrevented).toBe(true);
  });

  it.each([' ', 'a', 'Escape', 'Tab'])('does not call onClick when %j is pressed', (key) => {
    const { onClick, row } = renderRow();

    pressKey(row, key);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not prevent the default action for other keys', () => {
    const { row } = renderRow();

    expect(pressKey(row, ' ').defaultPrevented).toBe(false);
  });

  it('does not call onClick when Enter is pressed inside a control in the row', () => {
    const { onClick } = renderRow();

    pressKey(screen.getByLabelText('Device name'), 'Enter');

    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not prevent the default action for keys pressed inside a control in the row', () => {
    renderRow();

    expect(pressKey(screen.getByLabelText('Device name'), 'Enter').defaultPrevented).toBe(false);
  });
});
