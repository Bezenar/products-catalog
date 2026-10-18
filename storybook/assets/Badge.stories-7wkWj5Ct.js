import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Badge-CBsjr9TM.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Organisms/ProductCard/Compounds/Badge`,component:n,parameters:{docs:{description:{component:`A compact label positioned at the upper-right corner of a ProductCard.`}}},argTypes:{value:{control:`text`,description:`Badge content; accepts any React node.`,type:{name:`other`,value:``,required:!0},table:{type:{summary:`React.ReactNode`}}}}},a={args:{value:`New`},play:async({args:e,canvas:t,step:n})=>{await n(`Should render the supplied badge value`,async()=>{r(t.getByText(e.value)).toBeVisible()})}},o=[`Default`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'New'
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('Should render the supplied badge value', async () => {
      expect(canvas.getByText(args.value as string)).toBeVisible();
    });
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Default,o as __namedExportsOrder,i as default};