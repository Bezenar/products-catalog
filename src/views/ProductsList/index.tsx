import { useSelector } from 'react-redux';
import { useNavigate, generatePath  } from 'react-router';
import Table from 'lib/organisms/Table';
import { APP_ROUTE, PRODUCT_LIST_SCHEMA } from '../../constants';
import { selectFilteredDevices } from '../../store/selectors';
import type { T_AdaptedDeviceItem } from '../../types';
import generateDeviceImageUrl from '../../utils/generateDeviceImageUrl';

const ProductsList: React.FC = () => {
  const devices = useSelector(selectFilteredDevices);
  const navigate = useNavigate();

  return (
    <Table<T_AdaptedDeviceItem>
      colSchema={PRODUCT_LIST_SCHEMA}
      items={devices}
      emptyView={<Table.EmptyView colspan={PRODUCT_LIST_SCHEMA.length} />}
      rowRender={(item) => (
        <Table.InteractiveRow
          key={item.id}
          onClick={() => navigate(generatePath(`/${APP_ROUTE.PRODUCTS}`, { id: item.id }))}
        >
          <Table.Cell>
            <figure className="flex ai-center jc-center">
              <img
                loading="lazy"
                alt={`${item.product.name} image`}
                src={generateDeviceImageUrl(item, 20)}
              />
            </figure>
          </Table.Cell>

          <Table.Cell>{item.line?.name ?? '---'}</Table.Cell>

          <Table.Cell>{item.product.name}</Table.Cell>
        </Table.InteractiveRow>
      )}
    />
  );
};

export default ProductsList;
