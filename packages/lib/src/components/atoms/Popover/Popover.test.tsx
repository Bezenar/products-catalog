import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Popover, { type IPopoverHandle } from './index';

function setupPopover() {
  const ref = createRef<IPopoverHandle>();
  const { getByTestId } = render(
    <Popover ref={ref} anchor={<button type="button">Open</button>}>
      <span>Options</span>
    </Popover>,
  );
  const element = getByTestId('popover-content');
  const handle = ref.current;
  let open = false;

  if (!handle) {
    throw new Error('Popover ref was not assigned');
  }

  const showPopover = vi.fn(() => {
    open = true;
  });
  const hidePopover = vi.fn(() => {
    open = false;
  });
  const togglePopover = vi.fn(() => {
    open = !open;
  });

  Object.defineProperties(element, {
    showPopover: { configurable: true, value: showPopover },
    hidePopover: { configurable: true, value: hidePopover },
    togglePopover: { configurable: true, value: togglePopover },
    matches: { configurable: true, value: () => open },
  });

  return { handle, showPopover, hidePopover, togglePopover };
}

describe('Popover', () => {
  it('renders its anchor', () => {
    render(
      <Popover
        ref={createRef<IPopoverHandle>()}
        anchor={<button type="button">Open devices</button>}
      >
        <span>Device options</span>
      </Popover>,
    );

    expect(screen.getByRole('button', { name: 'Open devices' })).toBeTruthy();
  });

  it('renders its children', () => {
    render(
      <Popover ref={createRef<IPopoverHandle>()} anchor={<button type="button">Open</button>}>
        <span>Device options</span>
      </Popover>,
    );

    expect(screen.getByText('Device options')).toBeTruthy();
  });

  it.each([
    { label: 'default', height: undefined, expected: '320px' },
    { label: 'custom', height: '120px', expected: '120px' },
  ])('uses the $label maximum height', ({ height, expected }) => {
    const ref = createRef<IPopoverHandle>();
    const { getByTestId } = render(
      <Popover ref={ref} anchor={<button type="button">Open</button>} popoverMaxHeight={height}>
        <span>Options</span>
      </Popover>,
    );

    expect(getByTestId('popover-content').style.maxHeight).toBe(expected);
  });

  it('applies the configured width', () => {
    const { getByTestId } = render(
      <Popover
        ref={createRef<IPopoverHandle>()}
        anchor={<button type="button">Open</button>}
        popoverWidth="360px"
      >
        <span>Options</span>
      </Popover>,
    );

    expect(getByTestId('popover-content').style.width).toBe('360px');
  });

  it('reports the current open state', () => {
    const { handle } = setupPopover();

    expect(handle.isOpen()).toBe(false);
  });

  it('opens the popover through its ref', () => {
    const { handle, showPopover } = setupPopover();
    handle.open();

    expect(showPopover).toHaveBeenCalledOnce();
  });

  it('hides the popover through its ref', () => {
    const { handle, hidePopover } = setupPopover();
    handle.hide();

    expect(hidePopover).toHaveBeenCalledOnce();
  });

  it('toggles the popover through its ref', () => {
    const { handle, togglePopover } = setupPopover();
    handle.toggle();

    expect(togglePopover).toHaveBeenCalledOnce();
  });
});
