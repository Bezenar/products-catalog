import { useSelector } from 'react-redux';
import { generatePath, useNavigate } from 'react-router';
import ProductCard from 'lib/organisms/ProductCard';
import { APP_ROUTE } from '../../constants';
import { selectFilteredDevices } from '../../store/selectors';
import generateDeviceImageUrl from '../../utils/generateDeviceImageUrl';
import s from './ProductsGrid.module.scss';

const ProductsGrid: React.FC = () => {
  const devices = useSelector(selectFilteredDevices);
  const navigate = useNavigate();

  return (
    <div className={s.grid}>
      {devices.map((device) => {
        return (
          <ProductCard
            key={device.id}
            onClick={() => navigate(generatePath(`/${APP_ROUTE.PRODUCTS}`, { id: device.id }))}
          >
            <ProductCard.Badge value="New" />
            <ProductCard.Image
              src={generateDeviceImageUrl(device, 84)}
              alt={`${device.product.name} image`}
            />
            <ProductCard.Content>
              <ProductCard.Heading>{device.product.name}</ProductCard.Heading>

              <ProductCard.SecondaryText>
                {device.shortnames?.join(' ') || '---'}
              </ProductCard.SecondaryText>
            </ProductCard.Content>
          </ProductCard>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
