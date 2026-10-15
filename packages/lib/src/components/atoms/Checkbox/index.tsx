import { useId } from 'react';
import cn from '../../../utils/cn';
import s from './Checkbox.module.scss';

interface ICheckbox {
  isChecked: boolean;
  onChange: (nextValue: boolean) => void;
  label: string;
}

const Checkbox: React.FC<ICheckbox> = ({ label, onChange, isChecked }) => {
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label tabIndex={0} className={cn(s.label, 'flex ai-center gap-2')} htmlFor={id}>
      <input
        id={id}
        checked={isChecked}
        type="checkbox"
        className={s.input}
        onChange={handleChange}
      />

      <span
        aria-hidden="true"
        data-testid="checkbox-box"
        className={cn(s.customBox, 'as-center', { active: isChecked })}
      ></span>

      <span data-testid="checkbox-label" className={cn(s.customLabel, 'text--md')}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
