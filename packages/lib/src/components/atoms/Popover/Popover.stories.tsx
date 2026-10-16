import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import Popover from './index';

const meta = {
  title: 'Components/Atoms/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '> **NOTE:** Storybook renders stories inside an iframe, whose viewport can produce different ' +
          'fixed-position coordinates than the consuming application. This page intentionally documents the' +
          'API without embedding a live preview. You can check component stories in storybook.',
      },
    },
  },
  argTypes: {
    anchor: {
      control: false,
      description: 'Element the popover is anchored to.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'React.ReactNode' } },
    },
    children: {
      control: false,
      description: 'Content displayed inside the popover.',
      type: { name: 'other', value: '', required: true },
      table: { type: { summary: 'React.ReactNode' } },
    },
    isContentVisible: {
      control: 'boolean',
      description: 'Controls whether the popover content is visible.',
      type: { name: 'boolean', required: true },
      table: { type: { summary: 'boolean' } },
    },
    position: {
      control: 'select',
      options: ['bottom-left', 'bottom-right', 'bottom-center'],
      description: 'Popover position relative to its anchor.',
      table: {
        type: {
          summary: 'bottom-left | bottom-right | bottom-center',
        },
        defaultValue: { summary: 'bottom-left' },
      },
    },
    onOutsideClick: {
      action: 'Clicked outside',
      control: false,
      description: 'Called when the user presses the mouse outside the popover.',
      type: { name: 'function', required: true },
      table: { type: { summary: '() => void' } },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    anchor: <button type="button">Open Popover</button>,
    children: <div className="pa-3">Popover Content</div>,
    isContentVisible: false,
    onOutsideClick: fn(),
  },
  play: async ({ step, canvas }) => {
    await step('Should render anchor', async () => {
      expect(canvas.getByRole('button', { name: 'Open Popover' })).toBeInTheDocument();
    });

    await step('Popover content should be hidden', async () => {
      expect(canvas.queryByText('Popover Content')).not.toBeVisible();
    });
  },
};

export const VisiblePopover: Story = {
  args: {
    anchor: <button type="button">Open Popover</button>,
    children: <div className="pa-3">Popover Content</div>,
    isContentVisible: true,
    onOutsideClick: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should render anchor', async () => {
      expect(canvas.getByRole('button', { name: 'Open Popover' })).toBeInTheDocument();
    });

    await step('Popover content should be visible', async () => {
      expect(canvas.getByTestId('popover-content')).toBeVisible();
    });

    await step('By default should apply bottom-left position', async () => {
      expect(canvas.getByTestId('popover-content')).toHaveClass('bottom-left');
    });

    await step('Should close popover when clicking outside', async () => {
      await userEvent.click(document.body);

      expect(args.onOutsideClick).toHaveBeenCalled();
    });
  },
};

export const BottomRightPopover: Story = {
  args: {
    anchor: <button type="button">Open Popover</button>,
    children: <div className="pa-3">Popover Content</div>,
    isContentVisible: true,
    position: 'bottom-right',
    onOutsideClick: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should render anchor', async () => {
      expect(canvas.getByRole('button', { name: 'Open Popover' })).toBeInTheDocument();
    });

    await step('Popover content should be visible', async () => {
      expect(canvas.getByTestId('popover-content')).toBeVisible();
    });

    await step('Should apply bottom-right position', async () => {
      expect(canvas.getByTestId('popover-content')).toHaveClass('bottom-right');
    });

    await step('Should close popover when clicking outside', async () => {
      await userEvent.click(document.body);

      expect(args.onOutsideClick).toHaveBeenCalled();
    });
  },
};

export const BottomCenterPopover: Story = {
  args: {
    anchor: <button type="button">Open Popover</button>,
    children: <div className="pa-3">Popover Content</div>,
    isContentVisible: true,
    position: 'bottom-center',
    onOutsideClick: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Should render anchor', async () => {
      expect(canvas.getByRole('button', { name: 'Open Popover' })).toBeInTheDocument();
    });

    await step('Popover content should be visible', async () => {
      expect(canvas.getByTestId('popover-content')).toBeVisible();
    });

    await step('Should apply bottom-center position', async () => {
      expect(canvas.getByTestId('popover-content')).toHaveClass('bottom-center');
    });

    await step('Should close popover when clicking outside', async () => {
      await userEvent.click(document.body);

      expect(args.onOutsideClick).toHaveBeenCalled();
    });
  },
};
