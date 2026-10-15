import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import List from './index';

type Device = {
  id: number;
  name: string;
};

describe('lib/components/atoms/List', () => {
  it('renders an empty list when there are no items', () => {
    render(<List items={[]} renderItem={() => <span>Item</span>} />);

    expect(screen.getByRole('list').children).toHaveLength(0);
  });

  it('renders each item in the original order', () => {
    const items: Device[] = [
      { id: 1, name: 'Dream Router' },
      { id: 2, name: 'Switch 8' },
    ];

    render(<List items={items} renderItem={(item) => <span>{item.name}</span>} />);

    expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual([
      'Dream Router',
      'Switch 8',
    ]);
  });

  it('passes each original item to renderItem', () => {
    const items: Device[] = [
      { id: 1, name: 'Dream Router' },
      { id: 2, name: 'Switch 8' },
    ];
    const renderItem = vi.fn((item: Device) => <span>{item.name}</span>);

    render(<List items={items} renderItem={renderItem} />);

    expect(renderItem.mock.calls).toEqual([[items[0]], [items[1]]]);
  });
});
