import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CategoryFilters from './index';

const options = [
  { id: 1, name: 'Routers' },
  { id: 2, name: 'Switches' },
];
const renderOption = (option: (typeof options)[number]) => <span>{option.name}</span>;

function stubPopoverToggle() {
  const togglePopover = vi.fn();
  Object.defineProperty(screen.getByTestId('popover-content'), 'togglePopover', {
    configurable: true,
    value: togglePopover,
  });

  return togglePopover;
}

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
    stubPopoverToggle();
    const button = screen.getByRole('button', { name: 'Category' });

    for (let click = 0; click < clicks; click += 1) {
      fireEvent.click(button);
    }

    expect(button.classList.contains('active')).toBe(isActive);
  });

  it('toggles the popover when the filter button is clicked', () => {
    render(<CategoryFilters label="Category" options={options} renderOption={renderOption} />);
    const togglePopover = stubPopoverToggle();
    const button = screen.getByRole('button', { name: 'Category' });

    fireEvent.click(button);

    expect(togglePopover).toHaveBeenCalledOnce();
  });

  it.each([
    { scenario: 'closes while active', clicks: 1, newState: 'closed', isActive: false },
    { scenario: 'opens while active', clicks: 1, newState: 'open', isActive: true },
    { scenario: 'closes while inactive', clicks: 0, newState: 'closed', isActive: false },
  ] as const)(
    'handles beforetoggle when the popover $scenario',
    ({ clicks, newState, isActive }) => {
      render(<CategoryFilters label="Category" options={options} renderOption={renderOption} />);
      stubPopoverToggle();
      const button = screen.getByRole('button', { name: 'Category' });
      const popover = screen.getByTestId('popover-content');

      for (let click = 0; click < clicks; click += 1) {
        fireEvent.click(button);
      }

      const event = new Event('beforetoggle');
      Object.defineProperties(event, {
        oldState: { value: clicks ? 'open' : 'closed' },
        newState: { value: newState },
      });
      act(() => {
        popover.dispatchEvent(event);
      });

      expect(button.classList.contains('active')).toBe(isActive);
    },
  );

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
