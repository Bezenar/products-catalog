import { cn } from '../../utils';
import s from './IconButton.module.scss';

export interface IIconButton extends Required<React.PropsWithChildren> {
  ariaLabel: string;
  isActive?: boolean;
  activeClass?: string;
  onClick: () => void;
}

const IconButton: React.FC<IIconButton> = ({
  ariaLabel,
  onClick,
  children,
  isActive,
  activeClass = '',
}) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(s.button, { [activeClass]: isActive })}
    >
      {children}
    </button>
  );
};

export default IconButton;
