import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Search from './index';

const popoverMethods = ['showPopover', 'hidePopover', 'togglePopover'] as const;
const originalPopoverMethods = Object.fromEntries(
  popoverMethods.map((method) => [
    method,
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, method),
  ]),
);
const originalMatches = HTMLElement.prototype.matches;
const openPopovers = new WeakSet<HTMLElement>();

beforeEach(() => {
  Object.defineProperties(HTMLElement.prototype, {
    showPopover: {
      configurable: true,
      value: function (this: HTMLElement) {
        openPopovers.add(this);
      },
    },
    hidePopover: {
      configurable: true,
      value: function (this: HTMLElement) {
        openPopovers.delete(this);
      },
    },
    togglePopover: {
      configurable: true,
      value: function (this: HTMLElement) {
        if (openPopovers.has(this)) {
          openPopovers.delete(this);
        } else {
          openPopovers.add(this);
        }
      },
    },
    matches: {
      configurable: true,
      value: function (this: HTMLElement, selector: string) {
        return selector === ':popover-open'
          ? openPopovers.has(this)
          : originalMatches.call(this, selector);
      },
    },
  });
});

afterEach(() => {
  for (const method of popoverMethods) {
    const descriptor = originalPopoverMethods[method];
    if (descriptor) {
      Object.defineProperty(HTMLElement.prototype, method, descriptor);
    } else {
      Reflect.deleteProperty(HTMLElement.prototype, method);
    }
  }

  Object.defineProperty(HTMLElement.prototype, 'matches', {
    configurable: true,
    writable: true,
    value: originalMatches,
  });
  vi.restoreAllMocks();
});

describe('Search', () => {
  const label = 'Search devices';
  const options = [{ id: 1, name: 'Dream Router' }];
  const optionRenderer = (option: (typeof options)[number]) => <span>{option.name}</span>;

  it('renders the placeholder and matching options', () => {
    const { container } = render(
      <Search
        value=""
        label={label}
        placeholder="Search devices"
        options={options}
        optionRenderer={optionRenderer}
        onChange={() => {}}
      />,
    );

    expect({
      placeholder: screen.getByRole('textbox', { name: label }).getAttribute('placeholder'),
      options: container.querySelector('[data-testid="popover-content"]')?.textContent,
    }).toEqual({ placeholder: 'Search devices', options: 'Dream Router' });
  });

  it('opens the popover when the value is non-empty', () => {
    const { container } = render(
      <Search
        value="router"
        label={label}
        placeholder="Search devices"
        options={options}
        optionRenderer={optionRenderer}
        onChange={() => {}}
      />,
    );

    expect(
      container.querySelector('[data-testid="popover-content"]')?.matches(':popover-open'),
    ).toBe(true);
  });

  it('hides the popover when the value becomes empty', () => {
    const props = {
      label,
      placeholder: 'Search devices',
      options,
      optionRenderer,
      onChange: () => {},
    };
    const { container, rerender } = render(<Search {...props} value="router" />);

    rerender(<Search {...props} value="" />);

    expect(
      container.querySelector('[data-testid="popover-content"]')?.matches(':popover-open'),
    ).toBe(false);
  });

  it('forwards the changed text to onChange', () => {
    const onChange = vi.fn();
    render(
      <Search
        value=""
        label={label}
        placeholder="Search devices"
        debounceMs={0}
        options={options}
        optionRenderer={optionRenderer}
        onChange={onChange}
      />,
    );

    fireEvent.change(screen.getByRole('textbox', { name: label }), {
      target: { value: 'router' },
    });

    expect(onChange).toHaveBeenCalledWith('router');
  });

  it('forwards the popover sizing options', () => {
    const { container } = render(
      <Search
        value=""
        label={label}
        placeholder="Search devices"
        options={options}
        optionRenderer={optionRenderer}
        onChange={() => {}}
        popoverWidth="24rem"
        popoverMaxHeight="12rem"
      />,
    );
    const popover = container.querySelector<HTMLElement>('[data-testid="popover-content"]');

    expect({ width: popover?.style.width, maxHeight: popover?.style.maxHeight }).toEqual({
      width: '24rem',
      maxHeight: '12rem',
    });
  });
});
