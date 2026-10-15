import cn from '../../../utils/cn';
import s from './FilterButton.module.scss';

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
