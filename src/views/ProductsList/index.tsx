import Table, { type I_ColSchemaItem } from 'lib/organisms/Table';

const schema: Array<I_ColSchemaItem> = [
  { id: '1', label: '', width: '50px' },
  { id: '2', label: 'Product line' },
  { id: '3', label: 'Name' },
];

const data = [
  { id: '1', productLine: 'Electronics', name: 'Laptop' },
  { id: '2', productLine: 'Furniture', name: 'Chair' },
  { id: '3', productLine: 'Clothing', name: 'T-Shirt' },
];

const ProductsList: React.FC = () => {
  return (
    <Table<{ id: string; productLine: string; name: string }>
      colSchema={schema}
      items={data}
      emptyView={<Table.EmptyView colspan={schema.length} />}
      rowRender={(item) => (
        <Table.InteractiveRow key={item.id} onClick={() => console.log(item.id)}>
          <Table.Cell>{item.id}</Table.Cell>

          <Table.Cell>{item.productLine}</Table.Cell>

          <Table.Cell>{item.name}</Table.Cell>
        </Table.InteractiveRow>
      )}
    />
  );
};

export default ProductsList;
