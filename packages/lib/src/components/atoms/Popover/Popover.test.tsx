import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Popover, { type IPopover } from './index';

type TAnchorBounds = Pick<DOMRect, 'x' | 'y' | 'width' | 'height'>;

function mockAnchorBounds(...bounds: TAnchorBounds[]) {
  let callCount = 0;

  return vi
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(() => bounds[Math.min(callCount++, bounds.length - 1)] as DOMRect);
}

function renderPopover(props: Partial<IPopover> = {}) {
  const {
    anchor = <button type="button">Open popover</button>,
    children = <span>Popover content</span>,
    isContentVisible = true,
    onOutsideClick = () => {},
    ...otherProps
  } = props;

  return render(
    <Popover
      anchor={anchor}
      isContentVisible={isContentVisible}
      onOutsideClick={onOutsideClick}
      {...otherProps}
    >
      {children}
    </Popover>,
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Popover', () => {
  it('renders its anchor', () => {
    renderPopover();

    expect(screen.getByRole('button', { name: 'Open popover' })).toBeInTheDocument();
  });

  it('renders visible content when isContentVisible is true', () => {
    renderPopover({ isContentVisible: true });

    expect(screen.getByText('Popover content')).toBeVisible();
  });

  it('hides content when isContentVisible is false', () => {
    const props = {
      anchor: <button type="button">Open popover</button>,
      onOutsideClick: vi.fn(),
      children: <span>Popover content</span>,
    };
    render(<Popover {...props} isContentVisible={false} />);

    expect(screen.getByText('Popover content')).not.toBeVisible();
  });

  it('uses bottom-left as its default position', () => {
    renderPopover();

    expect(screen.getByText('Popover content').parentElement).toHaveClass('bottom-left');
  });

  it.each([
    { position: 'bottom-left', top: '60px' },
    { position: 'bottom-right', top: '60px' },
    { position: 'bottom-center', top: '60px' },
  ] as const)('calculates top coordinate for $position', ({ position, top }) => {
    mockAnchorBounds({ x: 10, y: 20, width: 100, height: 40 });

    renderPopover({ position });

    expect(screen.getByText('Popover content').parentElement?.style.top).toBe(top);
  });

  it('recalculates its top coordinate when the window scrolls', () => {
    mockAnchorBounds(
      { x: 10, y: 20, width: 100, height: 40 },
      { x: 15, y: 25, width: 120, height: 30 },
    );
    renderPopover({ position: 'bottom-right' });
    fireEvent.scroll(window);

    expect(screen.getByText('Popover content').parentElement?.style.top).toBe('55px');
  });

  it('recalculates its left coordinate when the window scrolls', () => {
    mockAnchorBounds(
      { x: 10, y: 20, width: 100, height: 40 },
      { x: 15, y: 25, width: 120, height: 30 },
    );
    renderPopover({ position: 'bottom-right' });
    fireEvent.scroll(window);

    expect(screen.getByText('Popover content').parentElement?.style.left).toBe('135px');
  });

  it('removes its scroll listener on unmount', () => {
    const getBoundingClientRect = mockAnchorBounds({ x: 10, y: 20, width: 100, height: 40 });
    const { unmount } = renderPopover();

    unmount();
    fireEvent.scroll(window);

    expect(getBoundingClientRect).toHaveBeenCalledOnce();
  });

  it('does not call onOutsideClick for a mouse down inside', () => {
    const onOutsideClick = vi.fn();
    renderPopover({ onOutsideClick });

    fireEvent.mouseDown(screen.getByText('Popover content'));

    expect(onOutsideClick).not.toHaveBeenCalled();
  });

  it('calls onOutsideClick for a mouse down outside', () => {
    const onOutsideClick = vi.fn();
    renderPopover({ onOutsideClick });

    fireEvent.mouseDown(document.body);

    expect(onOutsideClick).toHaveBeenCalledOnce();
  });
});
