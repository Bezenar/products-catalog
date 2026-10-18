import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./GhostButton-CofKGSSI.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),{fn:r,expect:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Atoms/GhostButton`,component:n,argTypes:{label:{control:`text`,description:`The label of the GhostButton`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},className:{control:`text`,description:`The className of the GhostButton`,type:{name:`string`,required:!1},table:{type:{summary:`string`}}},onClick:{action:`clicked`,control:!1,description:`The onClick handler for the GhostButton`,type:{name:`function`,required:!0},table:{type:{summary:`() => void`}}}}},o={args:{label:`Click me`,onClick:r()},play:async({args:e,userEvent:t,canvas:n,step:r})=>{await r(`Should render button label`,async()=>{i(n.getByRole(`button`,{name:e.label})).toBeInTheDocument()}),await r(`Click the GhostButton`,async()=>{await t.click(n.getByRole(`button`,{name:e.label})),i(e.onClick).toHaveBeenCalled()})}},s={args:{label:`Click me`,className:`custom-class`,onClick:r()},play:async({args:e,userEvent:t,canvas:n,step:r})=>{await r(`Should render button label`,async()=>{i(n.getByRole(`button`,{name:e.label})).toBeInTheDocument()}),await r(`Should have the custom class`,async()=>{i(n.getByRole(`button`,{name:e.label})).toHaveClass(e.className)}),await r(`Click the GhostButton`,async()=>{await t.click(n.getByRole(`button`,{name:e.label})),i(e.onClick).toHaveBeenCalled()})}},c=[`Default`,`WithClassName`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    onClick: fn()
  },
  play: async ({
    args,
    userEvent,
    canvas,
    step
  }) => {
    await step('Should render button label', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toBeInTheDocument();
    });
    await step('Click the GhostButton', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.label
      }));
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    className: 'custom-class',
    onClick: fn()
  },
  play: async ({
    args,
    userEvent,
    canvas,
    step
  }) => {
    await step('Should render button label', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toBeInTheDocument();
    });
    await step('Should have the custom class', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toHaveClass(args.className as string);
    });
    await step('Click the GhostButton', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.label
      }));
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Default,s as WithClassName,c as __namedExportsOrder,a as default};