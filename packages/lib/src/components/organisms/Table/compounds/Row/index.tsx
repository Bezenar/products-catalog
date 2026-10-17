const Row: React.FC<Required<React.PropsWithChildren>> = ({ children }) => {
  return <tr>{children}</tr>;
};

Row.displayName = 'Table.Row';

export default Row;
