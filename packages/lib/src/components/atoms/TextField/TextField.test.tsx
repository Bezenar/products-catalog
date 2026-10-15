import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import TextField from './index';

describe('TextField', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the controlled value and placeholder', () => {
    render(<TextField value="Router" placeholder="Search devices" onChange={() => {}} />);
    const input = screen.getByRole('textbox');

    expect({
      value: input.getAttribute('value'),
      placeholder: input.getAttribute('placeholder'),
    }).toEqual({
      value: 'Router',
      placeholder: 'Search devices',
    });
  });

  it('reports the changed input value', () => {
    const onChange = vi.fn();
    render(<TextField value="" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Gateway' } });

    expect(onChange).toHaveBeenCalledWith('Gateway');
  });

  it('keeps the typed value visible while the callback is debounced', () => {
    const onChange = vi.fn();
    render(<TextField value="" onChange={onChange} debounceMs={250} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.change(input, { target: { value: 'Gateway' } });

    expect(input.value).toBe('Gateway');
  });

  it('waits for the debounce delay and only reports the latest value', () => {
    vi.useFakeTimers();
    const onChange = vi.fn();
    render(<TextField value="" onChange={onChange} debounceMs={250} />);
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

  it('focuses the input when its wrapper is clicked', () => {
    render(<TextField value="" placeholder="Search devices" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    const wrapper = input.parentElement;

    if (!wrapper) {
      throw new Error('TextField input has no wrapper');
    }

    fireEvent.click(wrapper);

    expect(document.activeElement).toBe(input);
  });

  it('hides its placeholder when focused', () => {
    render(<TextField value="" placeholder="Search devices" onChange={() => {}} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.focus(input);

    expect(input.placeholder).toBe('');
  });

  it('restores its placeholder when blurred', () => {
    render(<TextField value="" placeholder="Search devices" onChange={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(input.getAttribute('placeholder')).toBe('Search devices');
  });

  it('renders the optional icon', () => {
    render(<TextField value="" onChange={() => {}} icon={<span>Search icon</span>} />);

    expect(screen.getByText('Search icon')).toBeTruthy();
  });
});
