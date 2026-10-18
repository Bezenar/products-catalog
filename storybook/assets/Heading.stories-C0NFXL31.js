import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Heading-BcNIdF1y.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Organisms/ProductCard/Compounds/Heading`,component:n,parameters:{docs:{description:{component:`Product name, rendered as an h4 heading.`}}},argTypes:{children:{control:`text`,description:`Product name.`,table:{type:{summary:`React.ReactNode`}}}}},a={args:{children:`Dream Router`},play:async({canvas:e,step:t})=>{await t(`Renders as a level-four heading`,async()=>{r(e.getByRole(`heading`,{level:4,name:`Dream Router`})).toBeInTheDocument()})}},o=[`Default`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Dream Router'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders as a level-four heading', async () => {
      expect(canvas.getByRole('heading', {
        level: 4,
        name: 'Dream Router'
      })).toBeInTheDocument();
    });
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Default,o as __namedExportsOrder,i as default};