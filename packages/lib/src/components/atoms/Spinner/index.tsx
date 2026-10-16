import cn from '../../../utils/cn';
import s from './Spinner.module.scss';

interface ISpinner {
  label?: string;
  size?: 'xl' | 'md' | 'sm';
}

const Spinner: React.FC<ISpinner> = ({ label, size = 'md' }) => {
  return (
    <div className={cn(s.spinner, size)} role="status" aria-label={label}>
      <span className={cn(s.indicator, size)} aria-hidden="true" />

      {label && <span className={cn(s.label, size)}>{label}</span>}
    </div>
  );
};

export default Spinner;
