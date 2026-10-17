import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Content from './index';

const meta = {
  title: 'Components/Organisms/ProductCard/Compounds/Content',
  component: Content,
  parameters: {
    docs: { description: { component: 'Vertical layout container for product-card text.' } },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Usually a ProductCard.Heading followed by ProductCard.SecondaryText.',
      table: { type: { summary: 'React.ReactNode' } },
    },
  },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h4>Dream Router</h4>
        <p>UDR</p>
      </>
    ),
  },
  play: async ({ canvas, step }) => {
    await step('Renders the content children', async () => {
      expect(canvas.getByText('Dream Router')).toBeInTheDocument();
    });
  },
};
