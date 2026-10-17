import type { Meta, StoryObj } from '@storybook/react-vite';
import ChevronIcon from './index';

const meta = {
  title: 'Icons/ChevronIcon',
  component: ChevronIcon,
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Direction of the chevron icon',
      type: { name: 'string', required: false },
      table: {
        type: { summary: '"left" | "right"' },
        defaultValue: { summary: 'right' },
      },
    },
  },
} satisfies Meta<typeof ChevronIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Left: Story = {
  args: {
    direction: 'left',
  },
};
