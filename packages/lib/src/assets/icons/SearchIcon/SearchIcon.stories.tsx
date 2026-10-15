import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchIcon from './index';

const meta = {
  title: 'Icons/SearchIcon',
  component: SearchIcon,
} satisfies Meta<typeof SearchIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
