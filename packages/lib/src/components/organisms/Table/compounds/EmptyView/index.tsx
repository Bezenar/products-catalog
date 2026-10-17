import s from './EmptyView..module.scss';

export interface I_EmptyView {
  colspan: number;
}

const EmptyView: React.FC<I_EmptyView> = ({ colspan }) => {
  return (
    <tr>
      <td colSpan={colspan} className={s.emptyView}>
        No data available
      </td>
    </tr>
  );
};

export default EmptyView;
