import type { I_ColSchemaItem } from '../..';
import cn from '../../../../../utils/cn';
import s from './HeadCell.module.scss';

interface IHeadCell {
  col: I_ColSchemaItem;
}

const HeadCell: React.FC<IHeadCell> = ({ col }) => {
  return (
    <th
      className={cn(s.headCell, 'ff text--primary ts--md ln--md fw--700')}
      style={{ width: col.width }}
    >
      {col.label}
    </th>
  );
};

HeadCell.displayName = 'Table.HeadCell';

export default HeadCell;
