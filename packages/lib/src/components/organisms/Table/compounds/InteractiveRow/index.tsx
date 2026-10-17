import s from './InteractiveRow.module.scss';

export interface I_InteractiveRow extends Required<React.PropsWithChildren> {
  onClick: () => void;
}

const InteractiveRow: React.FC<I_InteractiveRow> = ({ children, onClick }) => {
  return (
    <tr
      tabIndex={0}
      className={s.row}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === 'Enter') {
          event.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </tr>
  );
};

InteractiveRow.displayName = 'Table.Row';

export default InteractiveRow;
