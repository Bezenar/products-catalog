const SecondaryText: React.FC<Required<React.PropsWithChildren>> = ({ children }) => {
  return <p className="text--sm text--secondary">{children}</p>;
};

SecondaryText.displayName = 'ProductCard.SecondaryText';

export default SecondaryText;
