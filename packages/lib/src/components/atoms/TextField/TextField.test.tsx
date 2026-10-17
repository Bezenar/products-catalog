import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import TextField from './index';

describe('TextField', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the accessible label, controlled value, and placeholder', () => {
    render(
      <TextField
        value="Router"
        label="Device search"
        placeholder="Search devices"
        onChange={() => {}}
      />,
    );
    const input = screen.getByRole('textbox', { name: 'Device search' });

    expect({
      value: input.getAttribute('value'),
      placeholder: input.getAttribute('placeholder'),
    }).toEqual({
      value: 'Router',
      placeholder: 'Search devices',
    });
  });

  it.each([
    { label: 'default width', width: undefined, expected: '100%' },
    { label: 'pixel width', width: '320px', expected: '320px' },
    { label: 'numeric pixel width', width: 320, expected: '320px' },
    { label: 'percentage width', width: '50%', expected: '50%' },
  ])('applies the $label', ({ width, expected }) => {
    render(<TextField value="" label="Search devices" onChange={() => {}} width={width} />);

    expect(screen.getByRole('textbox').parentElement?.style.width).toBe(expected);
  });

  it('reports the changed input value', () => {
    const onChange = vi.fn();
    render(<TextField value="" label="Search devices" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Gateway' } });

    expect(onChange).toHaveBeenCalledWith('Gateway');
  });

  it('keeps the typed value visible while the callback is debounced', () => {
    const onChange = vi.fn();
    render(<TextField value="" label="Search devices" onChange={onChange} debounceMs={250} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.change(input, { target: { value: 'Gateway' } });

    expect(input.value).toBe('Gateway');
  });

  it('waits for the debounce delay and only reports the latest value', () => {
    vi.useFakeTimers();
    const onChange = vi.fn();
    render(<TextField value="" label="Search devices" onChange={onChange} debounceMs={250} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Gate' } });
    vi.advanceTimersByTime(100);
    fireEvent.change(input, { target: { value: 'Gateway' } });
    vi.advanceTimersByTime(249);
    const callsBeforeDeadline = onChange.mock.calls.length;
    vi.advanceTimersByTime(1);

    expect({ callsBeforeDeadline, calls: onChange.mock.calls }).toEqual({
      callsBeforeDeadline: 0,
      calls: [['Gateway']],
    });
  });

  it('clears a pending debounce when the controlled value changes', () => {
    vi.useFakeTimers();
    const onChange = vi.fn();
    const props = { label: 'Search devices', debounceMs: 250, onChange };
    const { rerender } = render(<TextField {...props} value="" />);
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.change(input, { target: { value: 'stale value' } });
    rerender(<TextField {...props} value="updated externally" />);
    vi.advanceTimersByTime(250);

    expect({ value: input.value, calls: onChange.mock.calls }).toEqual({
      value: 'updated externally',
      calls: [],
    });
  });

  it('focuses the input when its wrapper is clicked', () => {
    render(
      <TextField
        value=""
        label="Search devices"
        placeholder="Search devices"
        onChange={() => {}}
      />,
    );
    const input = screen.getByRole('textbox');
    const wrapper = input.parentElement;

    if (!wrapper) {
      throw new Error('TextField input has no wrapper');
    }

    fireEvent.click(wrapper);

    expect(document.activeElement).toBe(input);
  });

  it('hides its placeholder when focused', () => {
    render(
      <TextField
        value=""
        label="Search devices"
        placeholder="Search devices"
        onChange={() => {}}
      />,
    );
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.focus(input);

    expect(input.placeholder).toBe('');
  });

  it('restores its placeholder when blurred', () => {
    render(
      <TextField
        value=""
        label="Search devices"
        placeholder="Search devices"
        onChange={() => {}}
      />,
    );
    const input = screen.getByRole('textbox');

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(input.getAttribute('placeholder')).toBe('Search devices');
  });

  it('renders the optional icon', () => {
    render(
      <TextField
        value=""
        label="Search devices"
        onChange={() => {}}
        icon={<span>Search icon</span>}
      />,
    );

    expect(screen.getByText('Search icon')).toBeTruthy();
  });

  it('by default, the reset button is not displayed', () => {
    render(
      <TextField
        value=""
        label="Search devices"
        placeholder="Search devices"
        onChange={() => {}}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
  });

  it('does not display the reset button when value is empty and onClear is provided', () => {
    render(
      <TextField
        value=""
        label="Search devices"
        placeholder="Search devices"
        onChange={() => {}}
        onClear={() => {}}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
  });

  it('displays the reset button when onClear is provided and value are not empty', () => {
    render(
      <TextField
        value="value"
        label="Search devices"
        placeholder="Search devices"
        onChange={() => {}}
        onClear={() => {}}
      />,
    );

    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('click onClear button should trigger onClear callback', () => {
    const onClear = vi.fn();
    render(
      <TextField
        value="value"
        label="Search devices"
        placeholder="Search devices"
        onChange={() => {}}
        onClear={onClear}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Clear' }));

    expect(onClear).toHaveBeenCalled();
  });
});
