import { useEffect, useRef } from 'react';
import List from '../../atoms/List';
import Popover, { type IPopoverHandle } from '../../atoms/Popover';
import TextField from '../../atoms/TextField';

export interface ISearch<T> {
  value: string;
  label: string;
  placeholder: string;
  debounceMs?: number;
  popoverWidth?: React.CSSProperties['width'];
  popoverMaxHeight?: React.CSSProperties['maxHeight'];
  options: Array<T>;
  optionRenderer: (option: T) => React.ReactNode;
  onChange: (value: string) => void;
}

function Search<T extends { id: React.Key }>({
  value,
  label,
  placeholder,
  debounceMs = 300,
  popoverWidth,
  popoverMaxHeight = 320,
  options,
  optionRenderer,
  onChange,
}: ISearch<T>): React.ReactElement {
  const anchorRef = useRef<IPopoverHandle>(null);

  useEffect(() => {
    if (!!value.length && !anchorRef.current?.isOpen()) {
      anchorRef.current?.open();
    } else if (!value.length && anchorRef.current?.isOpen()) {
      anchorRef.current?.hide();
    }
  }, [value]);

  return (
    <>
      <Popover
        ref={anchorRef}
        popoverWidth={popoverWidth}
        popoverMaxHeight={popoverMaxHeight}
        anchor={
          <TextField
            value={value}
            label={label}
            placeholder={placeholder}
            debounceMs={debounceMs}
            onChange={onChange}
          />
        }
      >
        <List<T> items={options} renderItem={optionRenderer} />
      </Popover>
    </>
  );
}

export default Search;
