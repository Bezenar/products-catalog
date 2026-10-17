import cn from '../../../utils/cn';
import s from './IconButton.module.scss';

export interface IIconButton extends Required<React.PropsWithChildren> {
  ariaLabel: string;
  isActive?: boolean;
  disabled?: boolean;
  activeClass?: string;
  className?: string;
  onClick: () => void;
}

const IconButton: React.FC<IIconButton> = ({
  ariaLabel,
  onClick,
  children,
  disabled,
  className,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(s.button, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;
