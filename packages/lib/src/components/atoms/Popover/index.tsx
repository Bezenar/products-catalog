import { useEffect, useEffectEvent, useImperativeHandle, useRef } from 'react';
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
  subscribeForToggleEvent?: (
    oldState: ToggleEvent['oldState'],
    newState: ToggleEvent['newState'],
  ) => void;
  subscribeForBeforeToggleEvent?: (
    oldState: ToggleEvent['oldState'],
    newState: ToggleEvent['newState'],
  ) => void;
}

const Popover: React.FC<IPopover> = ({
  ref,
  children,
  anchor,
  popoverWidth,
  popoverMaxHeight = 320,
  subscribeForToggleEvent,
  subscribeForBeforeToggleEvent,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const subscriptionEvents = useEffectEvent(() => ({
    handleToggle: subscribeForToggleEvent,
    handleBeforeToggle: subscribeForBeforeToggleEvent,
  }));

  useEffect(() => {
    if (!popoverRef.current) return;

    const toggleCallback = (e: ToggleEvent) =>
      subscriptionEvents().handleToggle?.(e.oldState, e.newState);
    const beforeToggleCallback = (e: ToggleEvent) =>
      subscriptionEvents().handleBeforeToggle?.(e.oldState, e.newState);

    if (subscribeForToggleEvent)
      popoverRef.current?.addEventListener('toggle', (e) => toggleCallback(e));
    if (subscribeForBeforeToggleEvent)
      popoverRef.current?.addEventListener('beforetoggle', (e) => beforeToggleCallback(e));

    return () => {
      if (subscribeForToggleEvent)
        popoverRef.current?.removeEventListener('toggle', toggleCallback);

      if (subscribeForBeforeToggleEvent)
        popoverRef.current?.removeEventListener('beforetoggle', beforeToggleCallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
