import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./EmptyView-Q2Gy2QsC.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o=[`ID`,`Product line`,`Name`],s={title:`Components/Organisms/Table/compounds/EmptyView`,component:r,decorators:[e=>(0,i.jsxs)(`table`,{style:{width:`100%`},children:[(0,i.jsx)(`thead`,{children:(0,i.jsx)(`tr`,{children:o.map(e=>(0,i.jsx)(`th`,{children:e},e))})}),(0,i.jsx)(`tbody`,{children:(0,i.jsx)(e,{})})]})],parameters:{docs:{description:{component:'A single full-width row that reads "No data available". Pass it as the `emptyView` prop of `Table`, with `colspan` set to the number of columns.'}}},argTypes:{colspan:{control:{type:`number`,min:1},description:`Number of columns the message spans.`,type:{name:`number`,required:!0},table:{type:{summary:`number`}}}}},c={args:{colspan:o.length},play:async({args:e,canvas:t,step:n})=>{await n(`Should show the empty message`,async()=>{a(t.getByRole(`cell`,{name:`No data available`})).toBeVisible()}),await n(`Should span the configured number of columns`,async()=>{a(t.getByRole(`cell`)).toHaveAttribute(`colspan`,String(e.colspan))})}},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    colspan: columns.length
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('Should show the empty message', async () => {
      expect(canvas.getByRole('cell', {
        name: 'No data available'
      })).toBeVisible();
    });
    await step('Should span the configured number of columns', async () => {
      expect(canvas.getByRole('cell')).toHaveAttribute('colspan', String(args.colspan));
    });
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};