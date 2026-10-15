import s from './GhostButton.module.scss';

interface IGhostButton {
  label: string;
  onClick: () => void;
}

const GhostButton: React.FC<IGhostButton> = ({ label, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default GhostButton;
