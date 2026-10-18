import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./FilterButton-a2dufUOV.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),{fn:r,expect:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Atoms/FilterButton`,component:n,argTypes:{label:{control:`text`,description:`The label of the filter button`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},isActive:{control:`boolean`,description:`Whether the filter button is active`,type:{name:`boolean`,required:!1},table:{type:{summary:`boolean`}}},onClick:{action:`clicked`,control:!1,description:`The click handler for the filter button`,type:{name:`function`,required:!1},table:{type:{summary:`() => void`}}}}},o={args:{label:`Filter`,isActive:!1,onClick:r()},play:async({args:e,step:t,canvas:n,userEvent:r})=>{await t(`Should render provided label`,async()=>{i(n.getByRole(`button`,{name:e.label})).toBeTruthy()}),await t(`Should not be active`,async()=>{i(n.getByRole(`button`,{name:e.label})).not.toHaveClass(`active`)}),await t(`Click the filter button should trigger onClick`,async()=>{await r.click(n.getByRole(`button`,{name:e.label})),i(e.onClick).toHaveBeenCalled()})}},s={args:{label:`Filter`,isActive:!0,onClick:r()},play:async({args:e,step:t,canvas:n,userEvent:r})=>{await t(`Should render provided label`,async()=>{i(n.getByRole(`button`,{name:e.label})).toBeTruthy()}),await t(`Should be active`,async()=>{i(n.getByRole(`button`,{name:e.label})).toHaveClass(`active`)}),await t(`Click the filter button should trigger onClick`,async()=>{await r.click(n.getByRole(`button`,{name:e.label})),i(e.onClick).toHaveBeenCalled()})}},c=[`Default`,`Active`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Filter',
    isActive: false,
    onClick: fn()
  },
  play: async ({
    args,
    step,
    canvas,
    userEvent
  }) => {
    await step('Should render provided label', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toBeTruthy();
    });
    await step('Should not be active', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).not.toHaveClass('active');
    });
    await step('Click the filter button should trigger onClick', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.label
      }));
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Filter',
    isActive: true,
    onClick: fn()
  },
  play: async ({
    args,
    step,
    canvas,
    userEvent
  }) => {
    await step('Should render provided label', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toBeTruthy();
    });
    await step('Should be active', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toHaveClass('active');
    });
    await step('Click the filter button should trigger onClick', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.label
      }));
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Active,o as Default,c as __namedExportsOrder,a as default};