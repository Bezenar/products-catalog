import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./SearchIcon-CigGf8ZT.js";import{n as r}from"./icons-Dpk8DDn3.js";import{n as i,t as a}from"./TextField-BtD1n41L.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),i(),o=t(),{fn:s,expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Atoms/TextField`,component:a,argTypes:{value:{control:`text`,description:`The value of the text field`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},label:{control:`text`,description:`Accessible label for the text field`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},icon:{control:`select`,options:[`Search icon`,`none`],mapping:{"Search icon":(0,o.jsx)(n,{}),none:null},description:`Content rendered inside the button.`,type:{name:`function`,required:!1},table:{type:{summary:`React.ReactNode`}}},placeholder:{control:`text`,description:`The placeholder text of the text field`,type:{name:`string`,required:!1},table:{type:{summary:`string`}}},debounceMs:{control:{type:`number`,min:0},description:`Optional delay in milliseconds before onChange is called.`,type:{name:`number`,required:!1},table:{type:{summary:`number`},defaultValue:{summary:`undefined (immediate)`}}},width:{control:`text`,description:`CSS width value, such as 320px, 50%, or auto.`,type:{name:`other`,value:`React.CSSProperties["width"]`,required:!1},table:{type:{summary:`React.CSSProperties["width"]`},defaultValue:{summary:`100%`}}},onChange:{action:`changed`,control:!1,description:`Callback function when the value changes`,type:{name:`function`,required:!0},table:{type:{summary:`(value: string) => void`}}},onClear:{action:`cleared`,control:!1,description:`Callback function when the clear button is clicked`,type:{name:`function`,required:!1},table:{type:{summary:`() => void`}}}},args:{onClear:void 0}},d={args:{value:``,label:`Search devices`,onChange:s()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`should expose the provided accessible label`,async()=>{c(t.getByRole(`textbox`,{name:e.label})).toBeTruthy()}),await r(`should use value prop correctly`,async()=>{c(t.getByRole(`textbox`)).toHaveValue(e.value)}),await r(`should not display placeholder`,()=>{c(t.getByRole(`textbox`)).not.toHaveAttribute(`placeholder`)}),await r(`should not display icon`,()=>{c(t.queryByTestId(`text-field-icon`)).not.toBeInTheDocument()}),await r(`On change should trigger onChange callback`,async()=>{await n.type(t.getByRole(`textbox`),`Hello`),c(e.onChange).toHaveBeenCalledWith(`Hello`)}),await r(`without provided onClear callback reset button should not be displayed`,async()=>{c(t.queryByRole(`button`,{name:`Clear`})).not.toBeInTheDocument()})}},f={args:{value:``,label:`Search devices`,placeholder:`Enter text`,onChange:s()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`should expose the provided accessible label`,async()=>{c(t.getByRole(`textbox`,{name:e.label})).toBeTruthy()}),await r(`should use value prop correctly`,async()=>{c(t.getByRole(`textbox`)).toHaveValue(e.value)}),await r(`should display placeholder`,()=>{c(t.getByRole(`textbox`)).toHaveAttribute(`placeholder`,e.placeholder)}),await r(`should not display icon`,()=>{c(t.queryByTestId(`text-field-icon`)).not.toBeInTheDocument()}),await r(`On change should trigger onChange callback`,async()=>{await n.type(t.getByRole(`textbox`),`Hello`),c(e.onChange).toHaveBeenCalledWith(`Hello`)}),await r(`without provided onClear callback reset button should not be displayed`,async()=>{c(t.queryByRole(`button`,{name:`Clear`})).not.toBeInTheDocument()})}},p={args:{value:``,label:`Search devices`,icon:(0,o.jsx)(n,{}),placeholder:`Enter text`,onChange:s()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`should expose the provided accessible label`,async()=>{c(t.getByRole(`textbox`,{name:e.label})).toBeTruthy()}),await r(`should use value prop correctly`,async()=>{c(t.getByRole(`textbox`)).toHaveValue(e.value)}),await r(`should display placeholder`,()=>{c(t.getByRole(`textbox`)).toHaveAttribute(`placeholder`,e.placeholder)}),await r(`should display icon`,()=>{c(t.getByTestId(`text-field-icon`)).toContainHTML(`<svg`)}),await r(`On change should trigger onChange callback`,async()=>{await n.type(t.getByRole(`textbox`),`Hello`),c(e.onChange).toHaveBeenCalledWith(`Hello`)}),await r(`without provided onClear callback reset button should not be displayed`,async()=>{c(t.queryByRole(`button`,{name:`Clear`})).not.toBeInTheDocument()})}},m={args:{value:`value`,label:`Search devices`,placeholder:`Enter text`,onChange:s(),onClear:s()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`should expose the provided accessible label`,async()=>{c(t.getByRole(`textbox`,{name:e.label})).toBeTruthy()}),await r(`should use value prop correctly`,async()=>{c(t.getByRole(`textbox`)).toHaveValue(e.value)}),await r(`should display placeholder`,()=>{c(t.getByRole(`textbox`)).toHaveAttribute(`placeholder`,e.placeholder)}),await r(`should not display icon`,()=>{c(t.queryByTestId(`text-field-icon`)).not.toBeInTheDocument()}),await r(`with provided onClear callback reset button should be displayed`,async()=>{c(t.getByRole(`button`,{name:/Clear/i})).toBeInTheDocument()}),await r(`Click the reset button should trigger onClear callback`,async()=>{await n.click(t.getByRole(`button`,{name:/Clear/i})),c(e.onClear).toHaveBeenCalled()}),await r(`On change should trigger onChange callback`,async()=>{await n.type(t.getByRole(`textbox`),`Hello`),c(e.onChange).toHaveBeenCalledWith(`Hello`)})}},h={args:{value:``,label:`Search devices`,placeholder:`320px wide`,width:`320px`,onChange:s()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`should expose the provided accessible label`,async()=>{c(t.getByRole(`textbox`,{name:e.label})).toBeTruthy()}),await r(`Should apply custom width`,async()=>{c(t.getByTestId(`text-field`)).toHaveStyle({width:e.width})}),await r(`should use value prop correctly`,async()=>{c(t.getByRole(`textbox`)).toHaveValue(e.value)}),await r(`should display placeholder`,()=>{c(t.getByRole(`textbox`)).toHaveAttribute(`placeholder`,e.placeholder)}),await r(`should not display icon`,()=>{c(t.queryByTestId(`text-field-icon`)).not.toBeInTheDocument()}),await r(`On change should trigger onChange callback`,async()=>{await n.type(t.getByRole(`textbox`),`Hello`),c(e.onChange).toHaveBeenCalledWith(`Hello`)}),await r(`without provided onClear callback reset button should not be displayed`,async()=>{c(t.queryByRole(`button`,{name:`Clear`})).not.toBeInTheDocument()})}},g={args:{value:``,label:`Search devices`,placeholder:`Type to search`,debounceMs:300,onChange:s()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`should expose the provided accessible label`,async()=>{c(t.getByRole(`textbox`,{name:e.label})).toBeTruthy()}),await r(`should use value prop correctly`,async()=>{c(t.getByRole(`textbox`)).toHaveValue(e.value)}),await r(`should display placeholder`,()=>{c(t.getByRole(`textbox`)).toHaveAttribute(`placeholder`,e.placeholder)}),await r(`should not display icon`,()=>{c(t.queryByTestId(`text-field-icon`)).not.toBeInTheDocument()}),await r(`On change should trigger onChange callback with debounce`,async()=>{await n.type(t.getByRole(`textbox`),`Hello`),await l(()=>{c(e.onChange).toHaveBeenCalledWith(`Hello`)})}),await r(`without provided onClear callback reset button should not be displayed`,async()=>{c(t.queryByRole(`button`,{name:`Clear`})).not.toBeInTheDocument()})}},_=[`Default`,`WithPlaceholder`,`WithIcon`,`WithResetButton`,`WithCustomWidth`,`Debounced`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Search devices',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('should expose the provided accessible label', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toBeTruthy();
    });
    await step('should use value prop correctly', async () => {
      expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });
    await step('should not display placeholder', () => {
      expect(canvas.getByRole('textbox')).not.toHaveAttribute('placeholder');
    });
    await step('should not display icon', () => {
      expect(canvas.queryByTestId('text-field-icon')).not.toBeInTheDocument();
    });
    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');
      expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
    await step('without provided onClear callback reset button should not be displayed', async () => {
      expect(canvas.queryByRole('button', {
        name: 'Clear'
      })).not.toBeInTheDocument();
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Search devices',
    placeholder: 'Enter text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('should expose the provided accessible label', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toBeTruthy();
    });
    await step('should use value prop correctly', async () => {
      expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });
    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });
    await step('should not display icon', () => {
      expect(canvas.queryByTestId('text-field-icon')).not.toBeInTheDocument();
    });
    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');
      expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
    await step('without provided onClear callback reset button should not be displayed', async () => {
      expect(canvas.queryByRole('button', {
        name: 'Clear'
      })).not.toBeInTheDocument();
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Search devices',
    icon: <SearchIcon />,
    placeholder: 'Enter text',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('should expose the provided accessible label', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toBeTruthy();
    });
    await step('should use value prop correctly', async () => {
      expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });
    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });
    await step('should display icon', () => {
      expect(canvas.getByTestId('text-field-icon')).toContainHTML('<svg');
    });
    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');
      expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
    await step('without provided onClear callback reset button should not be displayed', async () => {
      expect(canvas.queryByRole('button', {
        name: 'Clear'
      })).not.toBeInTheDocument();
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'value',
    label: 'Search devices',
    placeholder: 'Enter text',
    onChange: fn(),
    onClear: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('should expose the provided accessible label', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toBeTruthy();
    });
    await step('should use value prop correctly', async () => {
      expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });
    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });
    await step('should not display icon', () => {
      expect(canvas.queryByTestId('text-field-icon')).not.toBeInTheDocument();
    });
    await step('with provided onClear callback reset button should be displayed', async () => {
      expect(canvas.getByRole('button', {
        name: /Clear/i
      })).toBeInTheDocument();
    });
    await step('Click the reset button should trigger onClear callback', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /Clear/i
      }));
      expect(args.onClear).toHaveBeenCalled();
    });
    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');
      expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Search devices',
    placeholder: '320px wide',
    width: '320px',
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('should expose the provided accessible label', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toBeTruthy();
    });
    await step('Should apply custom width', async () => {
      expect(canvas.getByTestId('text-field')).toHaveStyle({
        width: args.width
      });
    });
    await step('should use value prop correctly', async () => {
      expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });
    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });
    await step('should not display icon', () => {
      expect(canvas.queryByTestId('text-field-icon')).not.toBeInTheDocument();
    });
    await step('On change should trigger onChange callback', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');
      expect(args.onChange).toHaveBeenCalledWith('Hello');
    });
    await step('without provided onClear callback reset button should not be displayed', async () => {
      expect(canvas.queryByRole('button', {
        name: 'Clear'
      })).not.toBeInTheDocument();
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Search devices',
    placeholder: 'Type to search',
    debounceMs: 300,
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('should expose the provided accessible label', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toBeTruthy();
    });
    await step('should use value prop correctly', async () => {
      expect(canvas.getByRole('textbox')).toHaveValue(args.value);
    });
    await step('should display placeholder', () => {
      expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', args.placeholder);
    });
    await step('should not display icon', () => {
      expect(canvas.queryByTestId('text-field-icon')).not.toBeInTheDocument();
    });
    await step('On change should trigger onChange callback with debounce', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'Hello');
      await waitFor(() => {
        expect(args.onChange).toHaveBeenCalledWith('Hello');
      });
    });
    await step('without provided onClear callback reset button should not be displayed', async () => {
      expect(canvas.queryByRole('button', {
        name: 'Clear'
      })).not.toBeInTheDocument();
    });
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Debounced,d as Default,h as WithCustomWidth,p as WithIcon,f as WithPlaceholder,m as WithResetButton,_ as __namedExportsOrder,u as default};