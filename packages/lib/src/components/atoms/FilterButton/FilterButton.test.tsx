import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import FilterButton from './index';
import styles from './FilterButton.module.scss';

describe('FilterButton', () => {
  it('renders the provided label as a button', () => {
    render(<FilterButton label="Unread" onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Unread' })).toBeTruthy();
  });

  it('does not apply the active class by default', () => {
    render(<FilterButton label="Unread" onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Unread' }).classList.contains(styles.active)).toBe(
      false,
    );
  });

  it('applies the active class when isActive is true', () => {
    render(<FilterButton label="Unread" isActive onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Unread' }).classList.contains(styles.active)).toBe(
      true,
    );
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<FilterButton label="Unread" onClick={onClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Unread' }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
