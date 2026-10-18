import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./SearchListItem-8akiBbX8.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),{fn:r,expect:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Atoms/SearchListItem`,component:n,argTypes:{primaryText:{control:`text`,description:`Primary text of the search list item`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},secondaryText:{control:`text`,description:`Secondary text of the search list item`,type:{name:`string`,required:!1},table:{type:{summary:`string`}}},onClick:{action:`clicked`,control:!1,description:`Click handler for the search list item`,type:{name:`function`,required:!1},table:{type:{summary:`function`}}}}},o={args:{primaryText:`Dream Router`,onClick:r()},play:async({userEvent:e,args:t,canvas:n,step:r})=>{await r(`should render provided primary text`,async()=>{i(n.getByText(t.primaryText)).toBeInTheDocument()}),await r(`should trigger onClick when clicked`,async()=>{await e.click(n.getByText(t.primaryText)),i(t.onClick).toHaveBeenCalled()})}},s={args:{primaryText:`Dream Router`,secondaryText:`UDR`,onClick:r()},play:async({userEvent:e,args:t,canvas:n,step:r})=>{await r(`should render provided primary text`,async()=>{i(n.getByText(t.primaryText)).toBeInTheDocument()}),await r(`should render provided secondary text`,async()=>{i(n.getByText(t.secondaryText)).toBeInTheDocument()}),await r(`should trigger onClick when clicked`,async()=>{await e.click(n.getByText(t.primaryText)),i(t.onClick).toHaveBeenCalled()})}},c=[`Default`,`WithSecondaryText`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    primaryText: 'Dream Router',
    onClick: fn()
  },
  play: async ({
    userEvent,
    args,
    canvas,
    step
  }) => {
    await step('should render provided primary text', async () => {
      expect(canvas.getByText(args.primaryText)).toBeInTheDocument();
    });
    await step('should trigger onClick when clicked', async () => {
      await userEvent.click(canvas.getByText(args.primaryText));
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    primaryText: 'Dream Router',
    secondaryText: 'UDR',
    onClick: fn()
  },
  play: async ({
    userEvent,
    args,
    canvas,
    step
  }) => {
    await step('should render provided primary text', async () => {
      expect(canvas.getByText(args.primaryText)).toBeInTheDocument();
    });
    await step('should render provided secondary text', async () => {
      expect(canvas.getByText(args.secondaryText!)).toBeInTheDocument();
    });
    await step('should trigger onClick when clicked', async () => {
      await userEvent.click(canvas.getByText(args.primaryText));
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Default,s as WithSecondaryText,c as __namedExportsOrder,a as default};