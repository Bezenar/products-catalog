import type { Meta, StoryObj } from '@storybook/react-vite';
import ListIcon from './index';

const meta = {
  title: 'Icons/ListIcon',
  component: ListIcon,
} satisfies Meta<typeof ListIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
