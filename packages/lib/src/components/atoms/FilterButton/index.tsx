import s from './FilterButton.module.scss';
import cn from '../../../utils/cn';

interface IFilterButton {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<IFilterButton> = ({ label, isActive, onClick }) => {
  return (
    <button onClick={onClick} className={cn(s.button, { active: isActive })}>
      {label}
    </button>
  );
};

export default FilterButton;
