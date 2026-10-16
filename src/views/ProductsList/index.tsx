import { useGetProductsQuery } from '../../store/productsSlice';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProductsList {}

const ProductsList: React.FC<IProductsList> = () => {
  useGetProductsQuery();

  return <div>Products List</div>;
};

export default ProductsList;
