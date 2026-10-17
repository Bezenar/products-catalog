import s from './GhostButton.module.scss';

interface IGhostButton {
  label: string;
  className?: string;
  onClick: () => void;
}

const GhostButton: React.FC<IGhostButton> = ({ label, onClick, className }) => {
  return (
    <button className={`${s.button} ${className ?? ''}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default GhostButton;
