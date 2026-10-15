import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import { expect } from 'storybook/test';
import Popover, { type IPopover, type IPopoverHandle } from './index';

type PopoverExampleProps = {
  popoverWidth?: React.CSSProperties['width'];
  popoverMaxHeight?: React.CSSProperties['maxHeight'];
} & Partial<IPopover>;

function PopoverExample({ popoverWidth, popoverMaxHeight }: PopoverExampleProps) {
  const popoverRef = useRef<IPopoverHandle>(null);

  return (
    <div style={{ width: '280px', padding: '16px' }}>
      <Popover
        ref={popoverRef}
        anchor={
          <button type="button" onClick={() => popoverRef.current?.toggle()}>
            Open devices
          </button>
        }
        popoverWidth={popoverWidth}
        popoverMaxHeight={popoverMaxHeight}
      >
        <div style={{ display: 'grid', gap: '8px', padding: '12px' }}>
          {['Dream Router', 'Switch 8', 'Access Point', 'Gateway'].map((device) => (
            <div data-testid="device-item" key={device}>
              {device}
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
}

const meta = {
  title: 'Components/Atoms/Popover',
  component: PopoverExample,
  argTypes: {
    ref: {
      control: false,
      description: 'Reference to the Popover handle',
      type: { name: 'object', value: {}, required: true },
      table: {
        type: {
          summary: 'React.Ref<IPopoverHandle>',
          detail:
            'export interface IPopoverHandle {\n' +
            '  isOpen: () => boolean | undefined;\n' +
            '  open: () => void | undefined;\n' +
            '  hide: () => void | undefined;\n' +
            '  toggle: () => boolean | undefined;\n' +
            '}',
        },
      },
    },
    children: {
      control: false,
      description: 'Content of the Popover',
      type: { name: 'object', value: {}, required: true },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    anchor: {
      control: false,
      description: 'Anchor element for the Popover',
      type: { name: 'object', value: {}, required: true },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    popoverWidth: {
      control: 'text',
      description: 'Popover width; defaults to the anchor width.',
      table: { type: { summary: 'React.CSSProperties["width"]' } },
    },
    popoverMaxHeight: {
      control: 'text',
      description: 'Maximum height before the popover content scrolls.',
      table: {
        type: { summary: 'React.CSSProperties["maxHeight"]' },
        defaultValue: { summary: '320px' },
      },
    },
  },
} satisfies Meta<typeof PopoverExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, step, userEvent }) => {
    await step('Should render anchor element', async () => {
      const anchor = canvas.getByRole('button', { name: 'Open devices' });

      expect(anchor).toBeInTheDocument();
    });

    await step('Should display the popover content, on popover open trigger', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open devices' }));

      expect(canvas.getAllByTestId('device-item')[0]).toBeVisible();
    });

    await step('should apply default max height', async () => {
      const popover = canvas.getByTestId('popover-content');

      expect(popover).toHaveStyle({ maxHeight: '320px' });
    });
  },
};

export const WithCustomWidth: Story = {
  args: { popoverWidth: '600px' },
  play: async ({ canvas, step, userEvent }) => {
    await step('Should render anchor element', async () => {
      const anchor = canvas.getByRole('button', { name: 'Open devices' });

      expect(anchor).toBeInTheDocument();
    });

    await step('Should display the popover content, on popover open trigger', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open devices' }));

      expect(canvas.getAllByTestId('device-item')[0]).toBeVisible();
    });

    await step('Should apply custom width', async () => {
      const popover = canvas.getByTestId('popover-content');

      expect(popover).toHaveStyle({ width: '600px' });
    });

    await step('should apply default max height', async () => {
      const popover = canvas.getByTestId('popover-content');

      expect(popover).toHaveStyle({ maxHeight: '320px' });
    });
  },
};

export const WithCustomMaxHeight: Story = {
  args: { popoverMaxHeight: '100px' },
  play: async ({ canvas, step, userEvent }) => {
    await step('Should render anchor element', async () => {
      const anchor = canvas.getByRole('button', { name: 'Open devices' });

      expect(anchor).toBeInTheDocument();
    });

    await step('Should display the popover content, on popover open trigger', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open devices' }));

      expect(canvas.getAllByTestId('device-item')[0]).toBeVisible();
    });

    await step('Should apply custom max height', async () => {
      const popover = canvas.getByTestId('popover-content');

      expect(popover).toHaveStyle({ maxHeight: '100px' });
    });
  },
};
