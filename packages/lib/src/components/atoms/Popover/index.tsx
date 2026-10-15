import { useImperativeHandle, useRef } from 'react';
import s from './Popover.module.scss';

export interface IPopoverHandle {
  isOpen: () => boolean | undefined;
  open: () => void | undefined;
  hide: () => void | undefined;
  toggle: () => boolean | undefined;
}

export interface IPopover extends Required<React.PropsWithChildren> {
  anchor: React.ReactNode;
  ref: React.Ref<IPopoverHandle>;
  popoverWidth?: React.CSSProperties['width'];
  popoverMaxHeight?: React.CSSProperties['maxHeight'];
}

const Popover: React.FC<IPopover> = ({
  ref,
  children,
  anchor,
  popoverWidth,
  popoverMaxHeight = 320,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      isOpen: () => popoverRef.current?.matches(':popover-open'),
      open: () => popoverRef.current?.showPopover(),
      hide: () => popoverRef.current?.hidePopover(),
      toggle: () => popoverRef.current?.togglePopover(),
    };
  }, []);

  return (
    <>
      <div data-testid="popover-anchor" className={s.anchor}>
        {anchor}
      </div>
      <div
        data-testid="popover-content"
        className={s.popover}
        ref={popoverRef}
        style={{
          width: popoverWidth ?? 'anchor-size(width)',
          maxHeight: popoverMaxHeight,
        }}
        popover="auto"
      >
        {children}
      </div>
    </>
  );
};

export default Popover;
