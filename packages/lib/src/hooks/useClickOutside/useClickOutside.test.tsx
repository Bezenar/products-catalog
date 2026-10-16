import { fireEvent, renderHook } from '@testing-library/react';
import type { RefObject } from 'react';
import { describe, expect, it, vi } from 'vitest';
import useClickOutside from './index';

describe('useClickOutside', () => {
  it('calls the callback for a mouse down outside the referenced element', () => {
    const onOutsideClick = vi.fn();
    const ref: RefObject<HTMLDivElement> = { current: document.createElement('div') };
    renderHook(() => useClickOutside(ref, onOutsideClick));
    const event = new MouseEvent('mousedown', { bubbles: true });

    fireEvent(document.body, event);

    expect(onOutsideClick).toHaveBeenCalledWith(event);
  });

  it('does not call the callback for a mouse down inside the referenced element', () => {
    const onOutsideClick = vi.fn();
    const target = document.createElement('div');
    const insideTarget = document.createElement('button');
    target.append(insideTarget);
    const ref: RefObject<HTMLDivElement> = { current: target };
    renderHook(() => useClickOutside(ref, onOutsideClick));

    fireEvent.mouseDown(insideTarget);

    expect(onOutsideClick).not.toHaveBeenCalled();
  });

  it('does not call the callback while the ref is empty', () => {
    const onOutsideClick = vi.fn();
    const ref: RefObject<HTMLDivElement | null> = { current: null };
    renderHook(() => useClickOutside(ref, onOutsideClick));

    fireEvent.mouseDown(document.body);

    expect(onOutsideClick).not.toHaveBeenCalled();
  });

  it('stops propagation for document mouse down events', () => {
    const onOutsideClick = vi.fn();
    const ref: RefObject<HTMLDivElement> = { current: document.createElement('div') };
    renderHook(() => useClickOutside(ref, onOutsideClick));
    const event = new MouseEvent('mousedown', { bubbles: true });
    const stopPropagation = vi.spyOn(event, 'stopPropagation');

    fireEvent(document.body, event);

    expect(stopPropagation).toHaveBeenCalledOnce();
  });

  it('removes the document listener when unmounted', () => {
    const onOutsideClick = vi.fn();
    const ref: RefObject<HTMLDivElement> = { current: document.createElement('div') };
    const removeEventListener = vi.spyOn(document, 'removeEventListener');
    const { unmount } = renderHook(() => useClickOutside(ref, onOutsideClick));

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });
});
