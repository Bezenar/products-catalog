import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Content-GxNDosGR.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Organisms/ProductCard/Compounds/Content`,component:r,parameters:{docs:{description:{component:`Vertical layout container for product-card text.`}}},argTypes:{children:{control:!1,description:`Usually a ProductCard.Heading followed by ProductCard.SecondaryText.`,table:{type:{summary:`React.ReactNode`}}}}},s={args:{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`h4`,{children:`Dream Router`}),(0,i.jsx)(`p`,{children:`UDR`})]})},play:async({canvas:e,step:t})=>{await t(`Renders the content children`,async()=>{a(e.getByText(`Dream Router`)).toBeInTheDocument()})}},c=[`Default`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <h4>Dream Router</h4>
        <p>UDR</p>
      </>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders the content children', async () => {
      expect(canvas.getByText('Dream Router')).toBeInTheDocument();
    });
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Default,c as __namedExportsOrder,o as default};