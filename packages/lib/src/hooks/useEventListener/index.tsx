import { useEffect, useEffectEvent } from 'react';

export default function useEventListener(
  eventName: string,
  handler: (event?: Event) => void,
  element: HTMLElement | Window = window,
) {
  const handleEvent = useEffectEvent((event?: Event) => handler(event));

  useEffect(() => {
    if (!element?.addEventListener) return;

    element.addEventListener(eventName, handleEvent);

    return () => {
      element.removeEventListener(eventName, handleEvent);
    };
  }, [eventName, element]);
}
