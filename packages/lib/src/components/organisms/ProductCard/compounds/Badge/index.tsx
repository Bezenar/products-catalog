import cn from '../../../../../utils/cn';
import s from './Badge.module.scss';

interface I_Badge {
  value: React.ReactNode;
}

const Badge: React.FC<I_Badge> = ({ value }) => {
  return (
    <div
      className={cn(s.badge, 'flex ai-center jc-center text--sm text--brand-primary bg--canvas')}
    >
      {value}
    </div>
  );
};

Badge.displayName = 'ProductCard.Badge';

export default Badge;
