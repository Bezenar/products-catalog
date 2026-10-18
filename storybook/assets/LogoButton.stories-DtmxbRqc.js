import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./LogoButton-Dh_UeIdx.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),{expect:r,fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Atoms/LogoButton`,parameters:{layout:`centered`},component:n,argTypes:{ariaLabel:{control:`text`,type:{name:`string`,required:!0},description:`Text which will be assigned to button aria label attribute`,table:{type:{summary:`String`}}},onClick:{control:!1,type:{name:`function`,required:!0},description:`Fired function on button click`,table:{type:{summary:`() => void`}}}}},o={args:{ariaLabel:`Logo button`,onClick:i()},play:async({args:e,canvas:t,userEvent:n})=>{await n.click(t.getByRole(`button`,{name:`Logo button`})),r(e.onClick).toHaveBeenCalledOnce()}},s=[`Default`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Logo button',
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Logo button'
    }));
    expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...o.parameters?.docs?.source}}}})))()}c();export{o as Default,s as __namedExportsOrder,a as default};