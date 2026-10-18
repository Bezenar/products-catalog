import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Cell-UaAebcls.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Organisms/Table/compounds/Cell`,component:r,decorators:[e=>(0,i.jsx)(`table`,{children:(0,i.jsx)(`tbody`,{children:(0,i.jsx)(`tr`,{children:(0,i.jsx)(e,{})})})})],parameters:{docs:{description:{component:"A table data cell with the table cell padding and bottom border. Use it inside `Table.Row` or `Table.InteractiveRow`."}}},argTypes:{children:{control:`text`,description:`Content of the cell.`,type:{name:`other`,value:``,required:!0},table:{type:{summary:`React.ReactNode`}}}}},s={args:{children:`Dream Router`},play:async({canvas:e,step:t})=>{await t(`Should render the content in a table cell`,async()=>{a(e.getByRole(`cell`,{name:`Dream Router`})).toBeInTheDocument()})}},c=[`Default`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Dream Router'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Should render the content in a table cell', async () => {
      expect(canvas.getByRole('cell', {
        name: 'Dream Router'
      })).toBeInTheDocument();
    });
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Default,c as __namedExportsOrder,o as default};