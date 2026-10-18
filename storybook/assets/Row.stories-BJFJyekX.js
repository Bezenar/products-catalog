import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Cell-UaAebcls.js";import{n as i,t as a}from"./Row-CWnEmtXk.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Organisms/Table/compounds/Row`,component:a,decorators:[e=>(0,o.jsx)(`table`,{children:(0,o.jsx)(`tbody`,{children:(0,o.jsx)(e,{})})})],parameters:{docs:{description:{component:"A plain table row. Use it in `rowRender` when rows are not clickable; use `Table.InteractiveRow` when selecting a row should do something."}}},argTypes:{children:{control:!1,description:"The cells of the row, usually `Table.Cell` elements.",type:{name:`other`,value:``,required:!0},table:{type:{summary:`React.ReactNode`}}}}},l={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`Network`}),(0,o.jsx)(r,{children:`Dream Router`})]})},play:async({canvas:e,step:t})=>{await t(`Should render a table row`,async()=>{s(e.getByRole(`row`)).toBeInTheDocument()}),await t(`Should render every cell inside the row`,async()=>{s(e.getAllByRole(`cell`)).toHaveLength(2)}),await t(`Should not be focusable`,async()=>{s(e.getByRole(`row`)).not.toHaveAttribute(`tabindex`)})}},u=[`Default`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Cell>Network</Cell>
        <Cell>Dream Router</Cell>
      </>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Should render a table row', async () => {
      expect(canvas.getByRole('row')).toBeInTheDocument();
    });
    await step('Should render every cell inside the row', async () => {
      expect(canvas.getAllByRole('cell')).toHaveLength(2);
    });
    await step('Should not be focusable', async () => {
      expect(canvas.getByRole('row')).not.toHaveAttribute('tabindex');
    });
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Default,u as __namedExportsOrder,c as default};