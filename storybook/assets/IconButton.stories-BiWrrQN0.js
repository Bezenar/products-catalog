import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./GridIcon-D9ZC_Pri.js";import{t as r}from"./ListIcon-L29aq9GI.js";import{n as i}from"./icons-Dpk8DDn3.js";import{n as a,t as o}from"./IconButton-DYVi3pbc.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),a(),s=t(),{fn:c,expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Atoms/IconButton`,component:o,argTypes:{ariaLabel:{control:`text`,type:{name:`string`,required:!0},description:`Accessible label assigned to the button's aria-label attribute.`,table:{type:{summary:`String`}}},className:{control:`text`,type:{name:`string`,required:!1},description:`Additional class name applied to the button.`,table:{type:{summary:`string`}}},disabled:{control:`boolean`,type:{name:`boolean`,required:!1},description:`Prevents the button from receiving interaction.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},children:{control:`select`,options:[`Grid icon`,`List icon`],mapping:{"Grid icon":(0,s.jsx)(n,{}),"List icon":(0,s.jsx)(r,{})},description:`Content rendered inside the button.`,type:{name:`function`,required:!0},table:{type:{summary:`React.ReactNode`}}},onClick:{control:!1,type:{name:`function`,required:!0},description:`Callback invoked when the button is clicked.`,table:{type:{summary:`() => void`}}}}},d={args:{ariaLabel:`Grid icon label`,children:`Grid icon`,onClick:c()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Calls onClick when the button is clicked`,async()=>{await n.click(t.getByRole(`button`,{name:`Grid icon label`})),l(e.onClick).toHaveBeenCalledOnce()})}},f={args:{ariaLabel:`Disabled grid view`,children:`Grid icon`,disabled:!0,onClick:c()},play:async({args:e,canvas:t,step:n,userEvent:r})=>{await n(`Renders disabled`,async()=>{l(t.getByRole(`button`,{name:e.ariaLabel})).toBeDisabled()}),await n(`Does not call onClick when clicked`,async()=>{await r.click(t.getByRole(`button`,{name:e.ariaLabel})),l(e.onClick).not.toHaveBeenCalled()})}},p={args:{ariaLabel:`Custom grid view`,children:`Grid icon`,className:`custom-icon-button`,isActive:!0,activeClass:`active-class`,onClick:c()},play:async({canvas:e,step:t,args:n})=>{await t(`Applies the custom and active classes`,async()=>{l(e.getByRole(`button`,{name:n.ariaLabel})).toHaveClass(n.className,n.activeClass)})}},m=[`Default`,`Disabled`,`WithCustomClass`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Grid icon label',
    children: 'Grid icon',
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Calls onClick when the button is clicked', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Grid icon label'
      }));
      expect(args.onClick).toHaveBeenCalledOnce();
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Disabled grid view',
    children: 'Grid icon',
    disabled: true,
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    await step('Renders disabled', async () => {
      expect(canvas.getByRole('button', {
        name: args.ariaLabel
      })).toBeDisabled();
    });
    await step('Does not call onClick when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.ariaLabel
      }));
      expect(args.onClick).not.toHaveBeenCalled();
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Custom grid view',
    children: 'Grid icon',
    className: 'custom-icon-button',
    isActive: true,
    activeClass: 'active-class',
    onClick: fn()
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('Applies the custom and active classes', async () => {
      expect(canvas.getByRole('button', {
        name: args.ariaLabel
      })).toHaveClass(args.className!, args.activeClass!);
    });
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{d as Default,f as Disabled,p as WithCustomClass,m as __namedExportsOrder,u as default};