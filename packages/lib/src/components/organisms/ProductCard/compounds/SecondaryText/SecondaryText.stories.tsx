import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import SecondaryText from './index';

const meta = {
  title: 'Components/Organisms/ProductCard/Compounds/SecondaryText',
  component: SecondaryText,
  parameters: {
    docs: { description: { component: 'Supporting product text, rendered as a paragraph.' } },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Supporting text such as model identifiers or short names.',
      table: { type: { summary: 'React.ReactNode' } },
    },
  },
} satisfies Meta<typeof SecondaryText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'UDR' },
  play: async ({ canvas, step }) => {
    await step('Renders the supporting text in a paragraph', async () => {
      expect(canvas.getByText('UDR').tagName).toBe('P');
    });
  },
};
