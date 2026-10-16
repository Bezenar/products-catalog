import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CategoryFilters from './index';

const options = [
  { id: 1, name: 'Routers' },
  { id: 2, name: 'Switches' },
];
const renderOption = (option: (typeof options)[number]) => <span>{option.name}</span>;

describe('CategoryFilters', () => {
  it('renders its filter button', () => {
    render(
      <CategoryFilters
        label="Category"
        listHeading="Choose a category"
        options={options}
        renderOption={renderOption}
      />,
    );

    expect(screen.getByRole('button', { name: 'Category' })).toBeTruthy();
  });

  it('renders its list heading', () => {
    render(
      <CategoryFilters
        label="Category"
        listHeading="Choose a category"
        options={options}
        renderOption={renderOption}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Choose a category', hidden: true })).toBeTruthy();
  });

  it.each(options)('renders the $name option', ({ name }) => {
    render(<CategoryFilters label="Category" options={options} renderOption={renderOption} />);

    expect(screen.getByText(name)).toBeTruthy();
  });

  it.each([
    { clicks: 1, isActive: true },
    { clicks: 2, isActive: false },
  ])('sets active state after $clicks click(s)', ({ clicks, isActive }) => {
    render(<CategoryFilters label="Category" options={options} renderOption={renderOption} />);
    const button = screen.getByRole('button', { name: 'Category' });

    for (let click = 0; click < clicks; click += 1) {
      fireEvent.click(button);
    }

    expect(button.classList.contains('active')).toBe(isActive);
  });

  it('shows options when the filter button is clicked', () => {
    render(<CategoryFilters label="Category" options={options} renderOption={renderOption} />);
    const button = screen.getByRole('button', { name: 'Category' });

    fireEvent.click(button);

    expect(screen.getByText('Routers')).toBeVisible();
  });

  it('closes options after a mouse down outside the filter', () => {
    render(<CategoryFilters label="Category" options={options} renderOption={renderOption} />);
    fireEvent.click(screen.getByRole('button', { name: 'Category' }));

    fireEvent.mouseDown(document.body);

    expect(screen.getByText('Routers')).not.toBeVisible();
  });

  it('calls the reset handler when Reset is clicked', () => {
    const onReset = vi.fn();
    render(
      <CategoryFilters
        label="Category"
        options={options}
        renderOption={renderOption}
        onReset={{ disabled: false, onClick: onReset }}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Reset', hidden: true }));

    expect(onReset).toHaveBeenCalledOnce();
  });

  it('disables Reset when configured as disabled', () => {
    render(
      <CategoryFilters
        label="Category"
        options={options}
        renderOption={renderOption}
        onReset={{ disabled: true, onClick: () => {} }}
      />,
    );

    expect(screen.getByRole('button', { name: 'Reset', hidden: true })).toBeDisabled();
  });

  it('does not render Reset when no reset action is provided', () => {
    render(<CategoryFilters label="Category" options={options} renderOption={renderOption} />);

    expect(screen.queryByRole('button', { name: 'Reset' })).toBeNull();
  });

  it('omits the list heading when none is provided', () => {
    render(<CategoryFilters label="Category" options={options} renderOption={renderOption} />);

    expect(screen.queryByRole('heading')).toBeNull();
  });
});
