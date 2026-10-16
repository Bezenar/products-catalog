import cn from '../../../utils/cn';
import s from './SearchListItem.module.scss';

export interface ISearchListItem {
  primaryText: string;
  secondaryText?: string;
  onClick: () => void;
}

const SearchListItem: React.FC<ISearchListItem> = ({ primaryText, secondaryText, onClick }) => {
  return (
    <button
      type="button"
      className={cn('flex ai-center jc-sb wid-100 gap-2', s.row, s.clickable)}
      onClick={onClick}
    >
      <span
        data-testid="primary-text"
        className={cn('text--md', s.primaryText, s.overflowEllipses)}
      >
        {primaryText}
      </span>
      {!!secondaryText && (
        <span
          data-testid="secondary-text"
          className={cn('text--tertiary text--md', s.overflowEllipses)}
        >
          {secondaryText}
        </span>
      )}
    </button>
  );
};

export default SearchListItem;
