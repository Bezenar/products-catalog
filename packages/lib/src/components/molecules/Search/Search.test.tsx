import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Search from './index';

const options = [
  { id: 'router', product: { name: 'Dream Router' }, shortnames: ['UDR'] },
  { id: 'router-pro', product: { name: 'Dream Router Pro' }, shortnames: ['UDRP'] },
  { id: 'switch', product: { name: 'Switch 8' } },
];

function renderSearch(value = '', onChange = vi.fn()) {
  const view = render(
    <Search
      value={value}
      label="Search devices"
      placeholder="Search..."
      debounceMs={0}
      options={options}
      onChange={onChange}
    />,
  );

  return { ...view, onChange };
}

function StatefulSearch({ onChange }: { onChange: (value: string) => void }) {
  const [value, setValue] = useState('');

  return (
    <Search
      value={value}
      label="Search devices"
      placeholder="Search..."
      debounceMs={0}
      options={options}
      onChange={(nextValue) => {
        setValue(nextValue);
        onChange(nextValue);
      }}
    />
  );
}

const getInput = () => screen.getByRole('textbox', { name: 'Search devices' });
const getPopover = () => screen.getByTestId('popover-content');

describe('Search', () => {
  it('renders the accessible label', () => {
    renderSearch();

    expect(getInput()).toBeInTheDocument();
  });

  it('renders the placeholder', () => {
    renderSearch();

    expect(getInput()).toHaveAttribute('placeholder', 'Search...');
  });

  it('renders the provided value in the input', () => {
    renderSearch('switch');

    expect(getInput()).toHaveValue('switch');
  });

  it('forwards typed text to onChange', () => {
    const { onChange } = renderSearch();

    fireEvent.change(getInput(), { target: { value: 'dream' } });

    expect(onChange).toHaveBeenCalledWith('dream');
  });

  it('hides the results when the value is empty', () => {
    renderSearch();

    expect(getPopover()).not.toBeVisible();
  });

  it('shows the matching results when several products match the value', () => {
    renderSearch('dream');

    expect(screen.getAllByTestId('primary-text')).toHaveLength(2);
  });

  it('makes the results visible when several products match the value', () => {
    renderSearch('dream');

    expect(getPopover()).toBeVisible();
  });

  it('matches product names case-insensitively', () => {
    renderSearch('DREAM');

    expect(screen.getAllByTestId('primary-text')).toHaveLength(2);
  });

  it('lists the product names of the matches', () => {
    renderSearch('dream');

    expect(screen.getAllByTestId('primary-text').map((item) => item.textContent)).toEqual([
      'Dream Router',
      'Dream Router Pro',
    ]);
  });

  it('shows the first shortname of each match as secondary text', () => {
    renderSearch('dream');

    expect(screen.getAllByTestId('secondary-text').map((item) => item.textContent)).toEqual([
      'UDR',
      'UDRP',
    ]);
  });

  it('uses a fallback secondary text for a match without shortnames', () => {
    renderSearch('switch');

    expect(screen.getByTestId('secondary-text')).toHaveTextContent('---');
  });

  it('hides the results when only one product matches', () => {
    renderSearch('switch');

    expect(getPopover()).not.toBeVisible();
  });

  it('hides the results when no product matches', () => {
    renderSearch('tablet');

    expect(getPopover()).not.toBeVisible();
  });

  it('calls onChange with the product name of the selected result', () => {
    const { onChange } = renderSearch('dream');

    fireEvent.click(screen.getByText('Dream Router Pro'));

    expect(onChange).toHaveBeenCalledWith('Dream Router Pro');
  });

  it('closes the results after a result is selected', () => {
    renderSearch('dream');

    fireEvent.click(screen.getByText('Dream Router Pro'));

    expect(getPopover()).not.toBeVisible();
  });

  it('closes the results after clicking outside', () => {
    renderSearch('dream');

    fireEvent.mouseDown(document.body);

    expect(getPopover()).not.toBeVisible();
  });

  it('keeps the results open after clicking inside them', () => {
    renderSearch('dream');

    fireEvent.mouseDown(screen.getByText('Dream Router'));

    expect(getPopover()).toBeVisible();
  });

  it('shows the results again when the value changes after they were closed', () => {
    const { rerender, onChange } = renderSearch('dream');
    fireEvent.mouseDown(document.body);

    rerender(
      <Search
        value="dream r"
        label="Search devices"
        placeholder="Search..."
        debounceMs={0}
        options={options}
        onChange={onChange}
      />,
    );

    expect(getPopover()).toBeVisible();
  });

  it('shows a clear button when the input has text', () => {
    renderSearch('dream');

    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('does not show a clear button when the input is empty', () => {
    renderSearch();

    expect(screen.queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
  });

  it('calls onChange with an empty string when the clear button is clicked', () => {
    const { onChange } = renderSearch('dream');

    fireEvent.click(screen.getByRole('button', { name: 'Clear' }));

    expect(onChange).toHaveBeenCalledWith('');
  });

  it('shows the results while typing in a controlled parent', () => {
    render(<StatefulSearch onChange={vi.fn()} />);

    fireEvent.change(getInput(), { target: { value: 'dream' } });

    expect(getPopover()).toBeVisible();
  });

  it('closes the results and fills the input after selecting a result in a controlled parent', () => {
    render(<StatefulSearch onChange={vi.fn()} />);
    fireEvent.change(getInput(), { target: { value: 'dream' } });

    fireEvent.click(screen.getByText('Dream Router Pro'));

    expect(getInput()).toHaveValue('Dream Router Pro');
  });

  it('hides the results after clearing in a controlled parent', () => {
    render(<StatefulSearch onChange={vi.fn()} />);
    fireEvent.change(getInput(), { target: { value: 'dream' } });

    fireEvent.click(screen.getByRole('button', { name: 'Clear' }));

    expect(getPopover()).not.toBeVisible();
  });
});
