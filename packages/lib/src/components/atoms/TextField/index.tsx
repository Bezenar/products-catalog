import { useEffect, useRef, useState } from 'react';
import cn from '../../../utils/cn';
import s from './TextField.module.scss';

interface ITextField {
  value: string;
  icon?: React.ReactNode;
  placeholder?: string;
  debounceMs?: number;
  onChange: (value: string) => void;
}

const TextField: React.FC<ITextField> = ({ value, placeholder, onChange, icon, debounceMs }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInputValue(value);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [value]);

  const handleChange = (nextValue: string) => {
    setInputValue(nextValue);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (!debounceMs) {
      onChange(nextValue);
    } else {
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        onChange(nextValue);
      }, debounceMs);
    }
  };

  return (
    <div className={cn(s.wrapper, { [s.focused]: isFocused })} onClick={() => ref.current?.focus()}>
      {icon && <span className="flex ai-center jc-center">{icon}</span>}

      <input
        ref={ref}
        className={s.input}
        type="text"
        value={inputValue}
        placeholder={isFocused ? undefined : placeholder}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default TextField;
