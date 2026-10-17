import { useEffect, useEffectEvent } from 'react';

export default function useClickOutside<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  cb: (event: MouseEvent) => void,
) {
  const handleEvent = useEffectEvent((event: MouseEvent) => {
    event.stopPropagation();
    if (!ref.current || ref.current.contains(event.target as Node)) {
      return;
    }

    cb(event);
  });

  useEffect(() => {
    document.addEventListener('mousedown', handleEvent);

    return () => {
      document.removeEventListener('mousedown', handleEvent);
    };
  }, []);
}
