import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Cell-UaAebcls.js";import{n as i,t as a}from"./InteractiveRow-HGQqT-dr.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o=t(),{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,l=c(),u={title:`Components/Organisms/Table/compounds/InteractiveRow`,component:a,beforeEach:()=>{l.mockClear()},decorators:[e=>(0,o.jsx)(`table`,{children:(0,o.jsx)(`tbody`,{children:(0,o.jsx)(e,{})})})],parameters:{docs:{description:{component:"A focusable, clickable table row. `onClick` is called when the row is clicked, and when Enter is pressed while the row itself has focus. Key presses coming from controls inside the row are ignored."}}},argTypes:{onClick:{action:`row activated`,control:!1,description:`Called when the row is clicked or Enter is pressed on the focused row.`,type:{name:`function`,required:!0},table:{type:{summary:`() => void`}}},children:{control:!1,description:"The cells of the row, usually `Table.Cell` elements.",type:{name:`other`,value:``,required:!0},table:{type:{summary:`React.ReactNode`}}}},args:{onClick:l}},d={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`Network`}),(0,o.jsx)(r,{children:`Dream Router`})]})},play:async({args:e,canvas:t,step:n,userEvent:r})=>{await n(`Should be reachable with the keyboard`,async()=>{s(t.getByRole(`row`)).toHaveAttribute(`tabindex`,`0`)}),await n(`Should call onClick when the row is clicked`,async()=>{await r.click(t.getByText(`Dream Router`)),s(e.onClick).toHaveBeenCalledTimes(1)}),await n(`Should call onClick when Enter is pressed on the focused row`,async()=>{t.getByRole(`row`).focus(),await r.keyboard(`{Enter}`),s(e.onClick).toHaveBeenCalledTimes(2)}),await n(`Should not call onClick for other keys`,async()=>{await r.keyboard(`a`),s(e.onClick).toHaveBeenCalledTimes(2)})}},f={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`Dream Router`}),(0,o.jsx)(r,{children:(0,o.jsx)(`input`,{"aria-label":`Device name`})})]})},play:async({args:e,canvas:t,step:n,userEvent:r})=>{await n(`Should not call onClick when keys are pressed inside the input`,async()=>{t.getByLabelText(`Device name`).focus(),await r.keyboard(`Router{Enter}`),s(e.onClick).not.toHaveBeenCalled()}),await n(`Should let the input receive the typed text`,async()=>{s(t.getByLabelText(`Device name`)).toHaveValue(`Router`)})}},p=[`Default`,`WithInputInside`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Cell>Network</Cell>
        <Cell>Dream Router</Cell>
      </>
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    await step('Should be reachable with the keyboard', async () => {
      expect(canvas.getByRole('row')).toHaveAttribute('tabindex', '0');
    });
    await step('Should call onClick when the row is clicked', async () => {
      await userEvent.click(canvas.getByText('Dream Router'));
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
    await step('Should call onClick when Enter is pressed on the focused row', async () => {
      canvas.getByRole('row').focus();
      await userEvent.keyboard('{Enter}');
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
    await step('Should not call onClick for other keys', async () => {
      await userEvent.keyboard('a');
      expect(args.onClick).toHaveBeenCalledTimes(2);
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Cell>Dream Router</Cell>
        <Cell>
          <input aria-label="Device name" />
        </Cell>
      </>
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    await step('Should not call onClick when keys are pressed inside the input', async () => {
      // Focus directly: clicking the input would bubble a click to the row.
      canvas.getByLabelText('Device name').focus();
      await userEvent.keyboard('Router{Enter}');
      expect(args.onClick).not.toHaveBeenCalled();
    });
    await step('Should let the input receive the typed text', async () => {
      expect(canvas.getByLabelText('Device name')).toHaveValue('Router');
    });
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Default,f as WithInputInside,p as __namedExportsOrder,u as default};