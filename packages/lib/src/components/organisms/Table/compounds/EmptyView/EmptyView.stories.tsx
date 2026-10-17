import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import EmptyView from './index';

const columns = ['ID', 'Product line', 'Name'];

const meta = {
  title: 'Components/Organisms/Table/compounds/EmptyView',
  component: EmptyView,
  decorators: [
    (Story) => (
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A single full-width row that reads "No data available". Pass it as the `emptyView` prop of `Table`, ' +
          'with `colspan` set to the number of columns.',
      },
    },
  },
  argTypes: {
    colspan: {
      control: { type: 'number', min: 1 },
      description: 'Number of columns the message spans.',
      type: { name: 'number', required: true },
      table: { type: { summary: 'number' } },
    },
  },
} satisfies Meta<typeof EmptyView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { colspan: columns.length },
  play: async ({ args, canvas, step }) => {
    await step('Should show the empty message', async () => {
      expect(canvas.getByRole('cell', { name: 'No data available' })).toBeVisible();
    });

    await step('Should span the configured number of columns', async () => {
      expect(canvas.getByRole('cell')).toHaveAttribute('colspan', String(args.colspan));
    });
  },
};
