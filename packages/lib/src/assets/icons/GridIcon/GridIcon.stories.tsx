import type { Meta, StoryObj } from '@storybook/react-vite';
import GridIcon from './index';

const meta = {
  title: 'Icons/GridIcon',
  component: GridIcon,
} satisfies Meta<typeof GridIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
