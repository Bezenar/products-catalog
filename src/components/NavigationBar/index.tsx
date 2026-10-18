import { useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation, generatePath } from 'react-router';
import IconButton from 'lib/atoms/IconButton';
import cn from 'lib/utils/cn';
import { ChevronIcon } from '../../../packages/lib/src/assets/icons';
import { APP_ROUTE } from '../../constants';
import type { T_RootState } from '../../store';
import { selectProductsNavigationData } from '../../store/selectors';
import s from './NavigationBar.module.scss';

const NavigationBar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { prev, current, next } = useSelector((state: T_RootState) =>
    selectProductsNavigationData(state, id),
  );

  const handleGoBack = () => {
    console.log('STATE', state);
    if (state?.from) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className={'flex ai-center jc-sb wid-100 pb-8'}>
      <IconButton
        ariaLabel="Go to previous product"
        onClick={handleGoBack}
        disabled={!current}
        className={cn(s.navBtn, 'flex ai-center pa-1')}
      >
        <span className="flex ai-center text--md text--tertiary">
          <ChevronIcon direction="left" />
          Back
        </span>
      </IconButton>

      <div className="flex ai-center gap-1">
        <IconButton
          ariaLabel="Go to previous product"
          onClick={() =>
            !!prev && navigate(generatePath(`/${APP_ROUTE.PRODUCTS}`, { id: prev.id }))
          }
          disabled={!prev}
          className={cn(s.navBtn, 'flex ai-center pa-1')}
        >
          <ChevronIcon direction="left" />
        </IconButton>

        <IconButton
          ariaLabel="Go to next product"
          onClick={() =>
            !!next && navigate(generatePath(`/${APP_ROUTE.PRODUCTS}`, { id: next.id }))
          }
          disabled={!next}
          className={cn(s.navBtn, 'flex ai-center pa-1')}
        >
          <ChevronIcon direction="right" />
        </IconButton>
      </div>
    </div>
  );
};

export default NavigationBar;
