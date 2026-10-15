import cn from '../../../utils/cn';
import s from './List.module.scss';

interface IList<T extends { id: React.Key }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T extends { id: React.Key } = { id: React.Key }>({
  items,
  renderItem,
}: IList<T>): React.ReactElement {
  return (
    <ul className={cn('pa-2', s.list)}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;
