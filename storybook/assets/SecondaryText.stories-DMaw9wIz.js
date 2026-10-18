import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./SecondaryText-BKxuXZlh.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Organisms/ProductCard/Compounds/SecondaryText`,component:n,parameters:{docs:{description:{component:`Supporting product text, rendered as a paragraph.`}}},argTypes:{children:{control:`text`,description:`Supporting text such as model identifiers or short names.`,table:{type:{summary:`React.ReactNode`}}}}},a={args:{children:`UDR`},play:async({canvas:e,step:t})=>{await t(`Renders the supporting text in a paragraph`,async()=>{r(e.getByText(`UDR`).tagName).toBe(`P`)})}},o=[`Default`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'UDR'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders the supporting text in a paragraph', async () => {
      expect(canvas.getByText('UDR').tagName).toBe('P');
    });
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Default,o as __namedExportsOrder,i as default};