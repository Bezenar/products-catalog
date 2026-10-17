import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Heading from './index';

const meta = {
  title: 'Components/Organisms/ProductCard/Compounds/Heading',
  component: Heading,
  parameters: {
    docs: { description: { component: 'Product name, rendered as an h4 heading.' } },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Product name.',
      table: { type: { summary: 'React.ReactNode' } },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Dream Router' },
  play: async ({ canvas, step }) => {
    await step('Renders as a level-four heading', async () => {
      expect(canvas.getByRole('heading', { level: 4, name: 'Dream Router' })).toBeInTheDocument();
    });
  },
};
