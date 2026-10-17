import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router';
import Checkbox from 'lib/atoms/Checkbox';
import IconButton from 'lib/atoms/IconButton';
import CategoryFilters from 'lib/molecules/CategoryFilters';
import Search from 'lib/molecules/Search';
import cn from 'lib/utils/cn';
import { ListIcon, GridIcon } from '../../../packages/lib/src/assets/icons';
import { APP_ROUTE } from '../../constants';
import {
  setSearchValue,
  setSelectedCategories,
  clearSelectedCategories,
} from '../../store/filtersSlice';
import { selectFiltersData } from '../../store/selectors';
import type { T_AdaptedDeviceItem, T_AdaptedDeviceLine } from '../../types';

const Filters: React.FC = () => {
  const { selectedCategories, categories, totalDevices, devices, searchValue } = useSelector(
    selectFiltersData,
    shallowEqual,
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div className={cn('flex ai-center jc-sb gap-4')}>
      <div className="flex ai-center gap-4">
        <Search<T_AdaptedDeviceItem>
          value={searchValue}
          popoverWidth="20rem"
          placeholder="Search"
          label="Search products by name"
          options={devices}
          onChange={(value) => dispatch(setSearchValue(value))}
        />

        <p className="text--sm text--muted">{`${totalDevices} Devices`} results</p>
      </div>

      <div className="flex ai-center">
        <IconButton ariaLabel="Switch to list view" onClick={() => navigate(APP_ROUTE.ROOT)}>
          <ListIcon />
        </IconButton>
        <IconButton ariaLabel="Switch to grid view" onClick={() => navigate(APP_ROUTE.GRID_VIEW)}>
          <GridIcon />
        </IconButton>

        <CategoryFilters<T_AdaptedDeviceLine>
          label="Filter"
          options={categories}
          listHeading="Product Lines"
          renderOption={(option) => (
            <Checkbox
              label={option.name}
              isChecked={selectedCategories.includes(option.id)}
              onChange={(checked) => dispatch(setSelectedCategories({ id: option.id, checked }))}
            />
          )}
          onReset={{
            disabled: selectedCategories.length === 0,
            onClick: () => dispatch(clearSelectedCategories()),
          }}
        />
      </div>
    </div>
  );
};

export default Filters;
