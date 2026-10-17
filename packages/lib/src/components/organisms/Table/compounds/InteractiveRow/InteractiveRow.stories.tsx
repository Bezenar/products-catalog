import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import Cell from '../Cell';
import InteractiveRow from './index';

const onClick = fn();

const meta = {
  title: 'Components/Organisms/Table/compounds/InteractiveRow',
  component: InteractiveRow,
  beforeEach: () => {
    onClick.mockClear();
  },
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
          'A focusable, clickable table row. `onClick` is called when the row is clicked, and when Enter is ' +
          'pressed while the row itself has focus. Key presses coming from controls inside the row are ignored.',
      },
    },
  },
  argTypes: {
    onClick: {
      action: 'row activated',
      control: false,
      description: 'Called when the row is clicked or Enter is pressed on the focused row.',
      type: { name: 'function', required: true },
      table: { type: { summary: '() => void' } },
    },
    children: {
      control: false,
      description: 'The cells of the row, usually `Table.Cell` elements.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'React.ReactNode' } },
    },
  },
  args: { onClick },
} satisfies Meta<typeof InteractiveRow>;

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
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Should be reachable with the keyboard', async () => {
      expect(canvas.getByRole('row')).toHaveAttribute('tabindex', '0');
    });

    await step('Should call onClick when the row is clicked', async () => {
      await userEvent.click(canvas.getByText('Dream Router'));

      expect(args.onClick).toHaveBeenCalledTimes(1);
    });

    await step('Should call onClick when Enter is pressed on the focused row', async () => {
      canvas.getByRole('row').focus();
      await userEvent.keyboard('{Enter}');

      expect(args.onClick).toHaveBeenCalledTimes(2);
    });

    await step('Should not call onClick for other keys', async () => {
      await userEvent.keyboard('a');

      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
  },
};

export const WithInputInside: Story = {
  args: {
    children: (
      <>
        <Cell>Dream Router</Cell>
        <Cell>
          <input aria-label="Device name" />
        </Cell>
      </>
    ),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step('Should not call onClick when keys are pressed inside the input', async () => {
      // Focus directly: clicking the input would bubble a click to the row.
      canvas.getByLabelText('Device name').focus();
      await userEvent.keyboard('Router{Enter}');

      expect(args.onClick).not.toHaveBeenCalled();
    });

    await step('Should let the input receive the typed text', async () => {
      expect(canvas.getByLabelText('Device name')).toHaveValue('Router');
    });
  },
};
