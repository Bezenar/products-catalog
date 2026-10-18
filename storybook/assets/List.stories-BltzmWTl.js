import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./List-BMgRv6Rh.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),{fn:a,expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Atoms/List`,component:r,argTypes:{items:{control:!1,description:`Array of items to be rendered in the list`,table:{type:{summary:`Array<T extends { id: any }>`}}},renderItem:{control:!1,description:`Function to render each item in the list`,type:{name:`function`,required:!0},table:{type:{summary:`(item: T) => React.ReactNode`}}},className:{control:`text`,description:`Additional class name for the list container`,table:{type:{summary:`string`}}}}},c={args:{items:[{id:1,name:`Item 1`},{id:2,name:`Item 2`},{id:3,name:`Item 3`}],renderItem:a(e=>(0,i.jsx)(`span`,{"data-testid":`mocked`,children:e.name}))},play:async({args:e,canvas:t,step:n})=>{await n(`should render the list items correctly`,async()=>{for(let n of e.items)o(t.getByText(n.name)).toBeInTheDocument()}),await n(`should call renderItem for each item`,async()=>{o(e.renderItem).toHaveBeenCalledTimes(3)}),await n(`should render content by provided renderItem function`,async()=>{o(t.getAllByTestId(`mocked`)).toHaveLength(e.items.length)})}},l={args:{items:[{id:1,name:`Item 1`},{id:2,name:`Item 2`},{id:3,name:`Item 3`}],className:`custom-class`,renderItem:a(e=>(0,i.jsx)(`span`,{"data-testid":`mocked`,children:e.name}))},play:async({args:e,canvas:t,step:n})=>{await n(`should render the list items correctly`,async()=>{for(let n of e.items)o(t.getByText(n.name)).toBeInTheDocument()}),await n(`should call renderItem for each item`,async()=>{o(e.renderItem).toHaveBeenCalledTimes(3)}),await n(`should render content by provided renderItem function`,async()=>{o(t.getAllByTestId(`mocked`)).toHaveLength(e.items.length)}),await n(`should apply the custom class name to the list container`,async()=>{o(t.getByRole(`list`)).toHaveClass(`custom-class`)})}},u=[`Default`,`WithClassName`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      name: 'Item 1'
    }, {
      id: 2,
      name: 'Item 2'
    }, {
      id: 3,
      name: 'Item 3'
    }],
    renderItem: fn(item => <span data-testid="mocked">{item.name}</span>)
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('should render the list items correctly', async () => {
      for (const item of args.items) {
        expect(canvas.getByText(item.name)).toBeInTheDocument();
      }
    });
    await step('should call renderItem for each item', async () => {
      expect(args.renderItem).toHaveBeenCalledTimes(3);
    });
    await step('should render content by provided renderItem function', async () => {
      expect(canvas.getAllByTestId('mocked')).toHaveLength(args.items.length);
    });
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      name: 'Item 1'
    }, {
      id: 2,
      name: 'Item 2'
    }, {
      id: 3,
      name: 'Item 3'
    }],
    className: 'custom-class',
    renderItem: fn(item => <span data-testid="mocked">{item.name}</span>)
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    await step('should render the list items correctly', async () => {
      for (const item of args.items) {
        expect(canvas.getByText(item.name)).toBeInTheDocument();
      }
    });
    await step('should call renderItem for each item', async () => {
      expect(args.renderItem).toHaveBeenCalledTimes(3);
    });
    await step('should render content by provided renderItem function', async () => {
      expect(canvas.getAllByTestId('mocked')).toHaveLength(args.items.length);
    });
    await step('should apply the custom class name to the list container', async () => {
      expect(canvas.getByRole('list')).toHaveClass('custom-class');
    });
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Default,l as WithClassName,u as __namedExportsOrder,s as default};