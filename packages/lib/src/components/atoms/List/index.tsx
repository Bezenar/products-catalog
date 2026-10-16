import cn from '../../../utils/cn';
import s from './List.module.scss';

interface IList<T extends { id: React.Key }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

function List<T extends { id: React.Key } = { id: React.Key }>({
  items,
  renderItem,
  className,
}: IList<T>): React.ReactElement {
  return (
    <ul className={cn(s.list, className)}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;
