import { fireEvent, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import useEventListener from './index';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useEventListener', () => {
  it('listens on window by default', () => {
    const handler = vi.fn();
    renderHook(() => useEventListener('resize', handler));
    const event = new Event('resize');

    fireEvent(window, event);

    expect(handler).toHaveBeenCalledWith(event);
  });

  it('listens on the provided element', () => {
    const handler = vi.fn();
    const element = document.createElement('div');
    renderHook(() => useEventListener('custom-event', handler, element));
    const event = new Event('custom-event');

    fireEvent(element, event);

    expect(handler).toHaveBeenCalledWith(event);
  });

  it('calls the latest handler after rerender', () => {
    const firstHandler = vi.fn();
    const latestHandler = vi.fn();

    const element = document.createElement('div');
    const { rerender } = renderHook(
      ({ handler }) => useEventListener('custom-event', handler, element),
      { initialProps: { handler: firstHandler } },
    );

    rerender({ handler: latestHandler });
    fireEvent(element, new Event('custom-event'));

    expect([firstHandler.mock.calls.length, latestHandler.mock.calls.length]).toEqual([0, 1]);
  });

  it('does not register a listener when the target has no addEventListener method', () => {
    const handler = vi.fn();
    const element = {} as HTMLElement;

    renderHook(() => useEventListener('custom-event', handler, element));

    expect(element.addEventListener).toBeUndefined();
  });

  it('removes the listener when unmounted', () => {
    const handler = vi.fn();
    const element = document.createElement('div');
    const removeEventListener = vi.spyOn(element, 'removeEventListener');
    const { unmount } = renderHook(() => useEventListener('custom-event', handler, element));

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith('custom-event', expect.any(Function));
  });
});
