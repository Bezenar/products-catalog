import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Image-D2IqBdnw.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Organisms/ProductCard/Compounds/Image`,component:n,parameters:{docs:{description:{component:`Displays a product image with required alternative text.`}}},argTypes:{src:{control:`text`,description:`Image URL.`,table:{type:{summary:`string`}}},alt:{control:`text`,description:`Alternative text for assistive technology; use an empty string when decorative.`,table:{type:{summary:`string`}}}}},a={args:{src:`https://images.unsplash.com/photo-1518770660439-4636190af475?w=320`,alt:`Computer circuit board`},play:async({args:e,canvas:t,step:n})=>{await n(`Uses the provided source and alternative text`,async()=>{r(t.getByRole(`img`,{name:e.alt})).toHaveAttribute(`src`,e.src)})}},o=[`Default`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=320',
    alt: 'Computer circuit board'
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('Uses the provided source and alternative text', async () => {
      expect(canvas.getByRole('img', {
        name: args.alt
      })).toHaveAttribute('src', args.src);
    });
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Default,o as __namedExportsOrder,i as default};