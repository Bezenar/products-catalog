import { fireEvent, render, screen } from '@testing-library/react';
import ListItem from './index';

describe('lib/components/atoms/ListItem', () => {
  const mockOnClick = vi.fn();

  it('renders primary text', () => {
    render(<ListItem primaryText="Primary text" onClick={mockOnClick} />);

    expect(screen.getByTestId('primary-text')).toHaveTextContent('Primary text');
  });

  it('if secondary text is not provided, it does not render secondary text', () => {
    render(<ListItem primaryText="Primary text" onClick={mockOnClick} />);

    expect(screen.queryByTestId('secondary-text')).not.toBeInTheDocument();
  });

  it('if secondary text is provided, it renders secondary text', () => {
    render(
      <ListItem primaryText="Primary text" secondaryText="Secondary Text" onClick={mockOnClick} />,
    );

    expect(screen.getByTestId('secondary-text')).toHaveTextContent('Secondary Text');
  });

  it('calls onClick when clicked', () => {
    render(<ListItem primaryText="Primary text" onClick={mockOnClick} />);

    fireEvent.click(screen.getByRole('button', { name: /Primary text/ }));

    expect(mockOnClick).toHaveBeenCalledOnce();
  });
});
