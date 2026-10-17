import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import ProductCard from './index';

const onClick = fn();

const meta = {
  title: 'Components/Organisms/ProductCard',
  component: ProductCard,
  beforeEach: () => onClick.mockClear(),
  parameters: {
    docs: {
      description: {
        component:
          'A compound product card with optional native-button behavior. See the Usage page for API and accessibility guidance.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Card content, typically composed from the ProductCard compounds.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'React.ReactNode' } },
    },
    onClick: {
      action: 'product selected',
      control: false,
      description: 'Optional. When provided, the card renders as a native button.',
      type: { name: 'function', required: false },
      table: { type: { summary: '(() => void) | undefined' } },
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DisplayOnly: Story = {
  args: {
    onClick: undefined,
    children: (
      <>
        <ProductCard.Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=320"
          alt=""
        />
        <ProductCard.Content>
          <ProductCard.Heading>Dream Router</ProductCard.Heading>
          <ProductCard.SecondaryText>UDR</ProductCard.SecondaryText>
        </ProductCard.Content>
      </>
    ),
  },
  play: async ({ canvas, step }) => {
    await step('Renders the product name', async () => {
      expect(canvas.getByRole('heading', { level: 4, name: 'Dream Router' })).toBeInTheDocument();
    });

    await step('Is not interactive without onClick', async () => {
      expect(canvas.queryByRole('button')).not.toBeInTheDocument();
    });
  },
};

export const Clickable: Story = {
  args: {
    onClick,
    children: (
      <>
        <ProductCard.Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=320"
          alt=""
        />
        <ProductCard.Content>
          <ProductCard.Heading>Dream Router</ProductCard.Heading>
          <ProductCard.SecondaryText>UDR</ProductCard.SecondaryText>
        </ProductCard.Content>
      </>
    ),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Renders as a button named by its content', async () => {
      expect(canvas.getByRole('button', { name: /Dream Router/ })).toBeInTheDocument();
    });

    await step('Invokes onClick when activated', async () => {
      await userEvent.click(canvas.getByRole('button', { name: /Dream Router/ }));

      expect(args.onClick).toHaveBeenCalledOnce();
    });
  },
};
