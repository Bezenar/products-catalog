import cn from '../../../../../utils/cn';
import s from './Image.module.scss';

interface I_Image {
  src: string;
  alt: string;
}

const Image: React.FC<I_Image> = ({ src, alt }) => {
  return (
    <figure className={cn(s.figure, 'pa-2 flex ai-center jc-center wid-100')}>
      <img className={s.img} src={src} alt={alt} />
    </figure>
  );
};

Image.displayName = 'ProductCard.Image';

export default Image;
