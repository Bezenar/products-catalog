import { cn } from '../../utils';
import Logo from '../Logo';
import s from './LogoButton.module.scss';

interface I_LogoButton {
  ariaLabel: string;
  onClick: () => void;
}

const LogoButton: React.FC<I_LogoButton> = ({ ariaLabel, onClick }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={cn('flex ai-center jc-center', s.button)}
      onClick={onClick}
    >
      <Logo />
    </button>
  );
};

export default LogoButton;
