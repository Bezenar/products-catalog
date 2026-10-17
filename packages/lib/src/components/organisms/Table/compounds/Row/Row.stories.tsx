import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Cell from '../Cell';
import Row from './index';

const meta = {
  title: 'Components/Organisms/Table/compounds/Row',
  component: Row,
  decorators: [
    (Story) => (
      <table>
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
          'A plain table row. Use it in `rowRender` when rows are not clickable; use `Table.InteractiveRow` ' +
          'when selecting a row should do something.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'The cells of the row, usually `Table.Cell` elements.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'React.ReactNode' } },
    },
  },
} satisfies Meta<typeof Row>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Cell>Network</Cell>
        <Cell>Dream Router</Cell>
      </>
    ),
  },
  play: async ({ canvas, step }) => {
    await step('Should render a table row', async () => {
      expect(canvas.getByRole('row')).toBeInTheDocument();
    });

    await step('Should render every cell inside the row', async () => {
      expect(canvas.getAllByRole('cell')).toHaveLength(2);
    });

    await step('Should not be focusable', async () => {
      expect(canvas.getByRole('row')).not.toHaveAttribute('tabindex');
    });
  },
};
