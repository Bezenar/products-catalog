import { createElement } from 'react';
import Content from './compounds/Content';
import Heading from './compounds/Heading';
import Image from './compounds/Image';
import SecondaryText from './compounds/SecondaryText';
import s from './ProductCard.module.scss';

interface I_Compounds {
  Image: typeof Image;
  Heading: typeof Heading;
  Content: typeof Content;
  SecondaryText: typeof SecondaryText;
}

interface I_ProductCard {
  children: React.ReactNode;
  onClick?: () => void;
}

const ProductCard: React.FC<I_ProductCard> & I_Compounds = ({ children, onClick }) => {
  const isClickable = typeof onClick === 'function';

  return createElement(
    isClickable ? 'button' : 'div',
    {
      className: s.card,
      onClick: isClickable ? onClick : undefined,
    },
    children,
  );
};

ProductCard.Image = Image;
ProductCard.Heading = Heading;
ProductCard.Content = Content;
ProductCard.SecondaryText = SecondaryText;

ProductCard.displayName = 'ProductCard';

export default ProductCard;
