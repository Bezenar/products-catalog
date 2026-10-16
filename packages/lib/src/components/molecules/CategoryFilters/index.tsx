import { useRef, useState } from 'react';
import FilterButton from '../../atoms/FilterButton';
import List from '../../atoms/List';
import Popover, { type IPopoverHandle } from '../../atoms/Popover';
import s from './CategoryFilters.module.scss';

interface IFilters<T extends { id: React.Key }> {
  label: string;
  listHeading?: string;
  options: T[];
  renderOption: (option: T) => React.ReactNode;
  onReset?: {
    disabled: boolean;
    onClick: () => void;
  };
}

function CategoryFilters<T extends { id: React.Key }>({
  label,
  listHeading,
  options,
  renderOption,
  onReset,
}: IFilters<T>): React.ReactElement {
  const popoverRef = useRef<IPopoverHandle>(null);
  const buttonWrapperRef = useRef<HTMLSpanElement>(null);
  const [isBtnActive, setIsBtnActive] = useState(false);

  const handleClick = () => {
    setIsBtnActive((prev) => !prev);
    popoverRef.current?.toggle();
  };

  // eslint-disable-next-line react-hooks/refs
  const popoverWidth = (buttonWrapperRef.current?.getBoundingClientRect().width || 0) * 3;

  return (
    <Popover
      anchor={
        <span ref={buttonWrapperRef}>
          <FilterButton label={label} isActive={isBtnActive} onClick={handleClick} />
        </span>
      }
      ref={popoverRef}
      popoverWidth={popoverWidth}
      subscribeForBeforeToggleEvent={(_, next) => {
        if (next === 'closed' && isBtnActive) {
          setIsBtnActive(false);
        }
      }}
    >
      <div className="flex dir-col gap-4 pa-4">
        {!!listHeading && (
          <h6 data-testid="category-filter-heading" className="ff fw--700 ts--md lh--md">
            {listHeading}
          </h6>
        )}

        <List<T> items={options} renderItem={renderOption} />

        {!!onReset && (
          <button
            data-testid="category-filter-reset"
            className={s.resetButton}
            onClick={onReset.onClick}
            disabled={onReset.disabled}
          >
            Reset
          </button>
        )}
      </div>
    </Popover>
  );
}

export default CategoryFilters;
