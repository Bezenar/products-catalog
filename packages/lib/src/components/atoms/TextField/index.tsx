import { useEffect, useId, useRef, useState } from 'react';
import cn from '../../../utils/cn';
import s from './TextField.module.scss';

interface ITextField {
  value: string;
  label: string;
  icon?: React.ReactNode;
  placeholder?: string;
  debounceMs?: number;
  width?: React.CSSProperties['width'];
  onChange: (value: string) => void;
}

const TextField: React.FC<ITextField> = ({
  value,
  label,
  placeholder,
  onChange,
  icon,
  debounceMs,
  width = '100%',
}) => {
  const id = useId();
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
    <div
      data-testid="text-field"
      className={cn(s.wrapper, { [s.focused]: isFocused })}
      style={{ width }}
      onClick={() => ref.current?.focus()}
    >
      {icon && (
        <span data-testid="text-field-icon" className="flex ai-center jc-center">
          {icon}
        </span>
      )}

      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>

      <input
        id={id}
        ref={ref}
        className={s.input}
        type="text"
        value={inputValue}
        placeholder={isFocused ? undefined : placeholder}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete="off"
      />
    </div>
  );
};

export default TextField;
