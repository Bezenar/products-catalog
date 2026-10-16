import { useMemo, useState, useEffect } from 'react';
import SearchIcon from '../../../assets/icons/SearchIcon';
import List from '../../atoms/List';
import Popover from '../../atoms/Popover';
import SearchListItem from '../../atoms/SearchListItem';
import TextField from '../../atoms/TextField';
import s from './Search.module.scss';

export interface ISearch<T> {
  label: string;
  value?: string;
  placeholder: string;
  debounceMs?: number;
  popoverWidth?: React.CSSProperties['width'];
  popoverMaxHeight?: React.CSSProperties['maxHeight'];
  options: Array<T>;
  onChange: (value: string) => void;
}

function Search<T extends { id: string; product: { name: string }; shortnames?: string[] }>({
  value = '',
  label,
  placeholder,
  debounceMs = 300,
  options,
  onChange,
}: ISearch<T>): React.ReactElement {
  const [searchValue, setSearchValue] = useState<string>(value);
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const filteredOptions = useMemo<Array<T>>(() => {
    if (!searchValue || value === searchValue) return [];

    return options.filter((option) =>
      option.product.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [searchValue, options]);

  useEffect(() => {
    if (filteredOptions.length >= 1 && value !== searchValue) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsListVisible(true);
    }
  }, [filteredOptions.length, value, searchValue]);

  return (
    <>
      <Popover
        isContentVisible={isListVisible}
        onOutsideClick={() => setIsListVisible(false)}
        anchor={
          <TextField
            icon={<SearchIcon />}
            width="20rem"
            value={searchValue}
            label={label}
            placeholder={placeholder}
            debounceMs={debounceMs}
            onChange={setSearchValue}
          />
        }
      >
        <div className={s.listWrapper}>
          <List<T>
            items={filteredOptions}
            renderItem={(option) => (
              <SearchListItem
                primaryText={option.product.name}
                secondaryText={option.shortnames?.[0] ?? '---'}
                onClick={() => {
                  setSearchValue(option.product.name);
                  setIsListVisible(false);
                  onChange(option.product.name);
                }}
              />
            )}
          />
        </div>
      </Popover>
    </>
  );
}

export default Search;
