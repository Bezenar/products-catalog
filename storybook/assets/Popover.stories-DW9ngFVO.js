import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Popover-CNXpe7SX.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),{fn:a,expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Atoms/Popover`,component:r,parameters:{layout:`centered`,docs:{description:{component:`> **NOTE:** Storybook renders stories inside an iframe, whose viewport can produce different fixed-position coordinates than the consuming application. This page intentionally documents theAPI without embedding a live preview. You can check component stories in storybook.`}}},argTypes:{anchor:{control:!1,description:`Element the popover is anchored to.`,type:{name:`other`,value:``,required:!0},table:{type:{summary:`React.ReactNode`}}},children:{control:!1,description:`Content displayed inside the popover.`,type:{name:`other`,value:``,required:!0},table:{type:{summary:`React.ReactNode`}}},isContentVisible:{control:`boolean`,description:`Controls whether the popover content is visible.`,type:{name:`boolean`,required:!0},table:{type:{summary:`boolean`}}},position:{control:`select`,options:[`bottom-left`,`bottom-right`,`bottom-center`],description:`Popover position relative to its anchor.`,table:{type:{summary:`bottom-left | bottom-right | bottom-center`},defaultValue:{summary:`bottom-left`}}},onOutsideClick:{action:`Clicked outside`,control:!1,description:`Called when the user presses the mouse outside the popover.`,type:{name:`function`,required:!0},table:{type:{summary:`() => void`}}}}},c={args:{anchor:(0,i.jsx)(`button`,{type:`button`,children:`Open Popover`}),children:(0,i.jsx)(`div`,{className:`pa-3`,children:`Popover Content`}),isContentVisible:!1,onOutsideClick:a()},play:async({step:e,canvas:t})=>{await e(`Should render anchor`,async()=>{o(t.getByRole(`button`,{name:`Open Popover`})).toBeInTheDocument()}),await e(`Popover content should be hidden`,async()=>{o(t.queryByText(`Popover Content`)).not.toBeVisible()})}},l={args:{anchor:(0,i.jsx)(`button`,{type:`button`,children:`Open Popover`}),children:(0,i.jsx)(`div`,{className:`pa-3`,children:`Popover Content`}),isContentVisible:!0,onOutsideClick:a()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Should render anchor`,async()=>{o(t.getByRole(`button`,{name:`Open Popover`})).toBeInTheDocument()}),await r(`Popover content should be visible`,async()=>{o(t.getByTestId(`popover-content`)).toBeVisible()}),await r(`By default should apply bottom-left position`,async()=>{o(t.getByTestId(`popover-content`)).toHaveClass(`bottom-left`)}),await r(`Should close popover when clicking outside`,async()=>{await n.click(document.body),o(e.onOutsideClick).toHaveBeenCalled()})}},u={args:{anchor:(0,i.jsx)(`button`,{type:`button`,children:`Open Popover`}),children:(0,i.jsx)(`div`,{className:`pa-3`,children:`Popover Content`}),isContentVisible:!0,position:`bottom-right`,onOutsideClick:a()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Should render anchor`,async()=>{o(t.getByRole(`button`,{name:`Open Popover`})).toBeInTheDocument()}),await r(`Popover content should be visible`,async()=>{o(t.getByTestId(`popover-content`)).toBeVisible()}),await r(`Should apply bottom-right position`,async()=>{o(t.getByTestId(`popover-content`)).toHaveClass(`bottom-right`)}),await r(`Should close popover when clicking outside`,async()=>{await n.click(document.body),o(e.onOutsideClick).toHaveBeenCalled()})}},d={args:{anchor:(0,i.jsx)(`button`,{type:`button`,children:`Open Popover`}),children:(0,i.jsx)(`div`,{className:`pa-3`,children:`Popover Content`}),isContentVisible:!0,position:`bottom-center`,onOutsideClick:a()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Should render anchor`,async()=>{o(t.getByRole(`button`,{name:`Open Popover`})).toBeInTheDocument()}),await r(`Popover content should be visible`,async()=>{o(t.getByTestId(`popover-content`)).toBeVisible()}),await r(`Should apply bottom-center position`,async()=>{o(t.getByTestId(`popover-content`)).toHaveClass(`bottom-center`)}),await r(`Should close popover when clicking outside`,async()=>{await n.click(document.body),o(e.onOutsideClick).toHaveBeenCalled()})}},f=[`Default`,`VisiblePopover`,`BottomRightPopover`,`BottomCenterPopover`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    anchor: <button type="button">Open Popover</button>,
    children: <div className="pa-3">Popover Content</div>,
    isContentVisible: false,
    onOutsideClick: fn()
  },
  play: async ({
    step,
    canvas
  }) => {
    await step('Should render anchor', async () => {
      expect(canvas.getByRole('button', {
        name: 'Open Popover'
      })).toBeInTheDocument();
    });
    await step('Popover content should be hidden', async () => {
      expect(canvas.queryByText('Popover Content')).not.toBeVisible();
    });
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    anchor: <button type="button">Open Popover</button>,
    children: <div className="pa-3">Popover Content</div>,
    isContentVisible: true,
    onOutsideClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Should render anchor', async () => {
      expect(canvas.getByRole('button', {
        name: 'Open Popover'
      })).toBeInTheDocument();
    });
    await step('Popover content should be visible', async () => {
      expect(canvas.getByTestId('popover-content')).toBeVisible();
    });
    await step('By default should apply bottom-left position', async () => {
      expect(canvas.getByTestId('popover-content')).toHaveClass('bottom-left');
    });
    await step('Should close popover when clicking outside', async () => {
      await userEvent.click(document.body);
      expect(args.onOutsideClick).toHaveBeenCalled();
    });
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    anchor: <button type="button">Open Popover</button>,
    children: <div className="pa-3">Popover Content</div>,
    isContentVisible: true,
    position: 'bottom-right',
    onOutsideClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Should render anchor', async () => {
      expect(canvas.getByRole('button', {
        name: 'Open Popover'
      })).toBeInTheDocument();
    });
    await step('Popover content should be visible', async () => {
      expect(canvas.getByTestId('popover-content')).toBeVisible();
    });
    await step('Should apply bottom-right position', async () => {
      expect(canvas.getByTestId('popover-content')).toHaveClass('bottom-right');
    });
    await step('Should close popover when clicking outside', async () => {
      await userEvent.click(document.body);
      expect(args.onOutsideClick).toHaveBeenCalled();
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    anchor: <button type="button">Open Popover</button>,
    children: <div className="pa-3">Popover Content</div>,
    isContentVisible: true,
    position: 'bottom-center',
    onOutsideClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Should render anchor', async () => {
      expect(canvas.getByRole('button', {
        name: 'Open Popover'
      })).toBeInTheDocument();
    });
    await step('Popover content should be visible', async () => {
      expect(canvas.getByTestId('popover-content')).toBeVisible();
    });
    await step('Should apply bottom-center position', async () => {
      expect(canvas.getByTestId('popover-content')).toHaveClass('bottom-center');
    });
    await step('Should close popover when clicking outside', async () => {
      await userEvent.click(document.body);
      expect(args.onOutsideClick).toHaveBeenCalled();
    });
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as BottomCenterPopover,u as BottomRightPopover,c as Default,l as VisiblePopover,f as __namedExportsOrder,s as default};