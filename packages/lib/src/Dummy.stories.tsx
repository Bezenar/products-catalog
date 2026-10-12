import type { Meta, StoryObj } from '@storybook/react-vite';

function DummyStory() {
  return <button type="button">Dummy story</button>;
}

const meta = {
  title: 'Example/Dummy',
  component: DummyStory,
} satisfies Meta<typeof DummyStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};