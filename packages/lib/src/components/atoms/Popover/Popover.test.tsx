import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Popover from './index';
import type { IPopoverHandle } from './index';

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
    const ref = createRef<IPopoverHandle>();
    render(
      <Popover ref={ref} anchor={<button type="button">Open</button>}>
        Options
      </Popover>,
    );
    const matches = vi.fn(() => false);
    Object.defineProperty(screen.getByTestId('popover-content'), 'matches', {
      configurable: true,
      value: matches,
    });

    expect(ref.current?.isOpen()).toBe(false);
  });

  it('opens the popover through its ref', () => {
    const ref = createRef<IPopoverHandle>();
    render(
      <Popover ref={ref} anchor={<button type="button">Open</button>}>
        Options
      </Popover>,
    );
    const showPopover = vi.fn();
    Object.defineProperty(screen.getByTestId('popover-content'), 'showPopover', {
      configurable: true,
      value: showPopover,
    });
    ref.current?.open();

    expect(showPopover).toHaveBeenCalledOnce();
  });

  it('hides the popover through its ref', () => {
    const ref = createRef<IPopoverHandle>();
    render(
      <Popover ref={ref} anchor={<button type="button">Open</button>}>
        Options
      </Popover>,
    );
    const hidePopover = vi.fn();
    Object.defineProperty(screen.getByTestId('popover-content'), 'hidePopover', {
      configurable: true,
      value: hidePopover,
    });
    ref.current?.hide();

    expect(hidePopover).toHaveBeenCalledOnce();
  });

  it('toggles the popover through its ref', () => {
    const ref = createRef<IPopoverHandle>();
    render(
      <Popover ref={ref} anchor={<button type="button">Open</button>}>
        Options
      </Popover>,
    );
    const togglePopover = vi.fn();
    Object.defineProperty(screen.getByTestId('popover-content'), 'togglePopover', {
      configurable: true,
      value: togglePopover,
    });
    ref.current?.toggle();

    expect(togglePopover).toHaveBeenCalledOnce();
  });
});
