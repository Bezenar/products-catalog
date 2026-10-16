import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Search from './index';

const options = [
  { id: 'router', name: 'Router', product: { name: 'Dream Router' }, shortnames: ['UDR'] },
  { id: 'switch', name: 'Switch', product: { name: 'Switch 8' } },
];

function renderSearch(value = '', onChange = vi.fn()) {
  return render(
    <Search
      value={value}
      label="Search devices"
      placeholder="Search..."
      debounceMs={0}
      options={options}
      onChange={onChange}
    />,
  );
}

describe('Search', () => {
  it('renders the accessible label and placeholder', () => {
    renderSearch();

    expect(screen.getByRole('textbox', { name: 'Search devices' })).toHaveAttribute(
      'placeholder',
      'Search...',
    );
  });

  it('hides results when the search query is empty', () => {
    renderSearch();

    expect(screen.getByTestId('popover-content')).not.toBeVisible();
  });

  it('shows matching product names for a case-insensitive query', () => {
    renderSearch();
    fireEvent.change(screen.getByRole('textbox', { name: 'Search devices' }), {
      target: { value: 'dream' },
    });

    expect(screen.getByTestId('primary-text')).toHaveTextContent('Dream Router');
  });

  it('hides results when there are no matching product names', () => {
    renderSearch();
    fireEvent.change(screen.getByRole('textbox', { name: 'Search devices' }), {
      target: { value: 'tablet' },
    });

    expect(screen.getByTestId('popover-content')).not.toBeVisible();
  });

  it('shows only product names matching the query', () => {
    renderSearch();
    fireEvent.change(screen.getByRole('textbox', { name: 'Search devices' }), {
      target: { value: 'switch' },
    });

    expect(screen.getAllByTestId('primary-text')).toHaveLength(1);
  });

  it('uses the fallback secondary label when no shortname is provided', () => {
    renderSearch();
    fireEvent.change(screen.getByRole('textbox', { name: 'Search devices' }), {
      target: { value: 'switch' },
    });

    expect(screen.getByTestId('secondary-text')).toHaveTextContent('---');
  });

  it('calls onChange with the selected product name', () => {
    const onChange = vi.fn();
    renderSearch('', onChange);
    fireEvent.change(screen.getByRole('textbox', { name: 'Search devices' }), {
      target: { value: 'dream' },
    });

    fireEvent.click(screen.getByTestId('primary-text'));

    expect(onChange).toHaveBeenCalledWith('Dream Router');
  });

  it('closes the results after selecting an option', () => {
    function StatefulSearch({ onChange }: { onChange: (value: string) => void }) {
      const [value, setValue] = useState('');

      return (
        <Search
          value={value}
          label="Search devices"
          placeholder="Search..."
          debounceMs={0}
          options={options}
          onChange={(selectedValue) => {
            setValue(selectedValue);
            onChange(selectedValue);
          }}
        />
      );
    }
    render(<StatefulSearch onChange={vi.fn()} />);
    fireEvent.change(screen.getByRole('textbox', { name: 'Search devices' }), {
      target: { value: 'dream' },
    });

    fireEvent.click(screen.getByTestId('primary-text'));

    expect(screen.getByTestId('popover-content')).not.toBeVisible();
  });

  it('closes the results after clicking outside', () => {
    renderSearch();
    fireEvent.change(screen.getByRole('textbox', { name: 'Search devices' }), {
      target: { value: 'dream' },
    });

    fireEvent.mouseDown(document.body);

    expect(screen.getByTestId('popover-content')).not.toBeVisible();
  });
});
