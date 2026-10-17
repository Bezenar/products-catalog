import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Image from './index';

const meta = {
  title: 'Components/Organisms/ProductCard/Compounds/Image',
  component: Image,
  parameters: {
    docs: {
      description: { component: 'Displays a product image with required alternative text.' },
    },
  },
  argTypes: {
    src: { control: 'text', description: 'Image URL.', table: { type: { summary: 'string' } } },
    alt: {
      control: 'text',
      description:
        'Alternative text for assistive technology; use an empty string when decorative.',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=320',
    alt: 'Computer circuit board',
  },
  play: async ({ args, canvas, step }) => {
    await step('Uses the provided source and alternative text', async () => {
      expect(canvas.getByRole('img', { name: args.alt })).toHaveAttribute('src', args.src);
    });
  },
};
