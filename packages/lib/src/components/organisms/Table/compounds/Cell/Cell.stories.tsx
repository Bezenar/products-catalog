import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import Cell from './index';

const meta = {
  title: 'Components/Organisms/Table/compounds/Cell',
  component: Cell,
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A table data cell with the table cell padding and bottom border. Use it inside `Table.Row` or ' +
          '`Table.InteractiveRow`.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the cell.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'React.ReactNode' } },
    },
  },
} satisfies Meta<typeof Cell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Dream Router' },
  play: async ({ canvas, step }) => {
    await step('Should render the content in a table cell', async () => {
      expect(canvas.getByRole('cell', { name: 'Dream Router' })).toBeInTheDocument();
    });
  },
};
