const Heading: React.FC<Required<React.PropsWithChildren>> = ({ children }) => {
  return <h4 className="text--md">{children}</h4>;
};

Heading.displayName = 'ProductCard.Heading';

export default Heading;
