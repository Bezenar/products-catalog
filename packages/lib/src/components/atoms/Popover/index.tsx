import { Activity, useLayoutEffect, useRef, useState, useCallback } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import useEventListener from '../../../hooks/useEventListener';
import s from './Popover.module.scss';

export interface IPopover extends Required<React.PropsWithChildren> {
  anchor: React.ReactNode;
  isContentVisible: boolean;
  position?:
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'left-top'
    | 'left-center'
    | 'left-bottom'
    | 'right-top'
    | 'right-center'
    | 'right-bottom';
  onOutsideClick: () => void;
}

const Popover: React.FC<IPopover> = ({
  children,
  anchor,
  isContentVisible,
  position = 'bottom-left',
  onOutsideClick,
}) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<React.CSSProperties>({});

  const calculateCoords = useCallback(() => {
    if (!anchorRef.current) return;

    const { x, y, height, width } = anchorRef.current.getBoundingClientRect();

    switch (position) {
      case 'bottom-right':
        setCoords({ top: y + height, left: x + width });
        break;
      case 'bottom-center':
        setCoords({ top: y + height, left: x + width / 2 });
        break;
      case 'bottom-left':
      default:
        setCoords({ top: y + height, left: x });
        break;
    }
  }, [position]);

  useLayoutEffect(() => {
    calculateCoords();
  }, [calculateCoords]);

  useEventListener('scroll', calculateCoords, window);
  useClickOutside(contentRef, onOutsideClick);

  return (
    <div ref={contentRef}>
      <div data-testid="popover-anchor" ref={anchorRef}>
        {anchor}
      </div>

      <Activity mode={isContentVisible ? 'visible' : 'hidden'}>
        <div
          data-testid="popover-content"
          aria-live="polite"
          className={s.content + ' ' + position}
          style={coords}
        >
          {children}
        </div>
      </Activity>
    </div>
  );
};

export default Popover;
