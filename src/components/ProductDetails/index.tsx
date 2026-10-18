import { Activity, useState } from 'react';
import { useSelector } from 'react-redux';
import { generatePath, Navigate, useParams } from 'react-router';
import GhostButton from 'lib/atoms/GhostButton';
import List from 'lib/atoms/List';
import cn from 'lib/utils/cn';
import { APP_ROUTE } from '../../constants';
import type { T_RootState } from '../../store';
import { selectActiveDevice } from '../../store/selectors';
import collectDeviceDetails from '../../utils/collectDeviceDetails';
import generateDeviceImageUrl from '../../utils/generateDeviceImageUrl';
import s from './ProductDetails.module.scss';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { activeDevice, isLoading } = useSelector((state: T_RootState) =>
    selectActiveDevice(state, id),
  );
  const [isJsonBlockVisible, setIsJsonBlockVisible] = useState<boolean>(false);

  if (isLoading && !activeDevice) {
    return null;
  }

  if (!isLoading && !activeDevice) {
    return <Navigate to={generatePath(APP_ROUTE.ERRORS, { code: '404' })} />;
  }

  if (!isLoading && activeDevice) {
    const listItems = collectDeviceDetails(activeDevice);

    return (
      <div className={s.detailsContainer}>
        <div className="flex jc-center mx-auto gap-8">
          <div className={cn(s.imageContainer, 'bg--muted')}>
            <figure>
              <img src={generateDeviceImageUrl(activeDevice, 292)} alt="Product" />
            </figure>
          </div>

          <div className={s.details}>
            <h1 className="pb-1 text--xl text--primary">{activeDevice.product.name}</h1>

            <p className="pb-4 text--md text--tertiary">
              {activeDevice.shortnames?.join(' ') ?? '---'}
            </p>

            <List<(typeof listItems)[number]>
              items={listItems}
              renderItem={(item) => (
                <div className="flex jc-sb py-1">
                  <span className="text--md text--primary">{item.label}</span>
                  <span className="text--md text--tertiary">{item.value}</span>
                </div>
              )}
            />
          </div>
        </div>

        <div className={cn('flex dir-col ai-start pt-4', s.allDetails)}>
          <GhostButton
            label="See All Details as JSON"
            onClick={() => setIsJsonBlockVisible(!isJsonBlockVisible)}
          />

          <Activity mode={isJsonBlockVisible ? 'visible' : 'hidden'}>
            <div
              className={cn(s.jsonBlock, 'pt-4 wid-100 text--sm text--primary bg--muted')}
              aria-hidden={!isJsonBlockVisible}
              aria-live="polite"
            >
              {isJsonBlockVisible && <pre>{JSON.stringify(activeDevice, null, 2)}</pre>}
            </div>
          </Activity>
        </div>
      </div>
    );
  }

  return null;
};

export default ProductDetails;
