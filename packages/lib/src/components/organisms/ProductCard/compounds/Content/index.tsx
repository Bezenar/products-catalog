import cn from '../../../../../utils/cn';
import s from './Content.module.scss';

const Content: React.FC<Required<React.PropsWithChildren>> = ({ children }) => {
  return <div className={cn(s.content, 'pa-2 flex dir-col jc-sb wid-100')}>{children}</div>;
};

Content.displayName = 'ProductCard.Content';

export default Content;
