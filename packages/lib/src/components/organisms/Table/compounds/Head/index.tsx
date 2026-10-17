import type { I_ColSchemaItem } from '../../index';
import HeadCell from '../HeadCell';
import Row from '../Row';

interface IHead {
  colSchema: I_ColSchemaItem[];
}

const Head: React.FC<IHead> = ({ colSchema }) => {
  return (
    <thead>
      <Row>
        {colSchema.map((col) => (
          <HeadCell key={col.id} col={col} />
        ))}
      </Row>
    </thead>
  );
};

Head.displayName = 'Table.Head';

export default Head;
