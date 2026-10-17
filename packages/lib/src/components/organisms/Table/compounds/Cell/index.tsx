import cn from '../../../../../utils/cn';
import s from './Cell.module.scss';

const Cell: React.FC<Required<React.PropsWithChildren>> = ({ children }) => {
  return <td className={cn(s.cell, 'text--md text--secondary')}>{children}</td>;
};

export default Cell;
