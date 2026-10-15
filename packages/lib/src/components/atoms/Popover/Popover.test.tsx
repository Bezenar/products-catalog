import { render, screen } from '@testing-library/react';
import { createRef, type Ref } from 'react';
import { describe, expect, it, vi } from 'vitest';
import Popover from './index';
import type { IPopoverHandle } from './index';

const { mockHandle } = vi.hoisted(() => ({
  mockHandle: {
    isOpen: vi.fn(() => false),
    open: vi.fn(),
    hide: vi.fn(),
    toggle: vi.fn(() => false),
  },
}));

vi.mock('react', async (importOriginal) => {
  const React = await importOriginal<typeof import('react')>();

  return {
    ...React,
    useImperativeHandle: (
      ref: Ref<IPopoverHandle> | undefined,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _createHandle: () => IPopoverHandle,
    ) => React.useImperativeHandle(ref, () => mockHandle),
  };
});

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

    expect(ref.current?.isOpen()).toBe(false);
  });

  it('opens the popover through its ref', () => {
    const ref = createRef<IPopoverHandle>();
    render(
      <Popover ref={ref} anchor={<button type="button">Open</button>}>
        Options
      </Popover>,
    );
    ref.current?.open();

    expect(mockHandle.open).toHaveBeenCalledOnce();
  });

  it('hides the popover through its ref', () => {
    const ref = createRef<IPopoverHandle>();
    render(
      <Popover ref={ref} anchor={<button type="button">Open</button>}>
        Options
      </Popover>,
    );
    ref.current?.hide();

    expect(mockHandle.hide).toHaveBeenCalledOnce();
  });

  it('toggles the popover through its ref', () => {
    const ref = createRef<IPopoverHandle>();
    render(
      <Popover ref={ref} anchor={<button type="button">Open</button>}>
        Options
      </Popover>,
    );
    ref.current?.toggle();

    expect(mockHandle.toggle).toHaveBeenCalledOnce();
  });
});
