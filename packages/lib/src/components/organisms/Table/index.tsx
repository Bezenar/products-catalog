import Cell from './compounds/Cell';
import EmptyView from './compounds/EmptyView';
import Head from './compounds/Head';
import InteractiveRow from './compounds/InteractiveRow';
import Row from './compounds/Row';
import s from './Table.module.scss';

export interface I_ColSchemaItem {
  id: string;
  label: string;
  width?: React.CSSProperties['width'];
}

interface I_Table<T> {
  colSchema: I_ColSchemaItem[];
  items: T[];
  rowRender: (item: T) => React.ReactNode;
  emptyView?: React.ReactNode;
}

function Table<T extends { id: string }>({
  colSchema,
  items,
  rowRender,
  emptyView,
}: I_Table<T>): React.ReactElement {
  const isEmptyViewVisible = items.length === 0;
  return (
    <table className={s.table}>
      <Head colSchema={colSchema} />

      <tbody>
        {isEmptyViewVisible && emptyView}
        {!isEmptyViewVisible && items.map((item) => rowRender(item))}
      </tbody>
    </table>
  );
}

Table.InteractiveRow = InteractiveRow;
Table.Row = Row;
Table.EmptyView = EmptyView;
Table.Cell = Cell;

export default Table;
