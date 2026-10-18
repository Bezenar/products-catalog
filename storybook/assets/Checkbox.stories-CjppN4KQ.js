import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-B0iyQvc5.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./cn-SWPk7jUc.js";var a,o,s,c;function l(){return(l=e((()=>{a=`_input_1056r_1`,o=`_label_1056r_5`,s=`_customBox_1056r_14`,c={input:a,label:o,customBox:s}})))()}var u,d,f;function p(){return(p=e((()=>{u=t(),r(),l(),d=n(),f=({label:e,onChange:t,isChecked:n})=>{let r=(0,u.useId)();return(0,d.jsxs)(`label`,{tabIndex:0,className:i(c.label,`flex ai-center gap-2`),htmlFor:r,children:[(0,d.jsx)(`input`,{id:r,checked:n,type:`checkbox`,className:c.input,onChange:e=>{t(e.target.checked)}}),(0,d.jsx)(`span`,{"aria-hidden":`true`,"data-testid":`checkbox-box`,className:i(c.customBox,`as-center`,{active:n})}),(0,d.jsx)(`span`,{"data-testid":`checkbox-label`,className:i(c.customLabel,`text--md`),children:e})]})},f.__docgenInfo={description:``,methods:[],displayName:`Checkbox`}})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{p(),{fn:m,expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Atoms/Checkbox`,component:f,argTypes:{isChecked:{control:`boolean`,description:`Checkbox state`,type:{name:`boolean`,required:!0},table:{type:{summary:`boolean`}}},label:{control:`text`,description:`Checkbox label`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},onChange:{control:!1,description:`Fired function on checkbox change`,table:{type:{summary:`(nextValue: boolean) => void`}}}}},_={args:{isChecked:!1,label:`check me`,onChange:m()},play:async({args:e,userEvent:t,canvas:n,step:r})=>{await r(`Should render label`,()=>{h(n.getByTestId(`checkbox-label`)).toHaveTextContent(e.label)}),await r(`Shouldn't be active`,async()=>{h(n.getByTestId(`checkbox-box`)).not.toHaveClass(`active`)}),await r(`Should call onChange function`,async()=>{await t.click(n.getByRole(`checkbox`,{hidden:!0})),h(e.onChange).toHaveBeenCalledWith(!e.isChecked)})}},v={args:{isChecked:!0,label:`check me`,onChange:m()},play:async({args:e,userEvent:t,canvas:n,step:r})=>{await r(`Should render label`,()=>{h(n.getByTestId(`checkbox-label`)).toHaveTextContent(e.label)}),await r(`Should be active`,async()=>{h(n.getByTestId(`checkbox-box`)).toHaveClass(`active`)}),await r(`Should call onChange function`,async()=>{await t.click(n.getByRole(`checkbox`,{hidden:!0})),h(e.onChange).toHaveBeenCalledWith(!e.isChecked)})}},y=[`Default`,`Active`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isChecked: false,
    label: 'check me',
    onChange: fn()
  },
  play: async ({
    args,
    userEvent,
    canvas,
    step
  }) => {
    await step('Should render label', () => {
      expect(canvas.getByTestId('checkbox-label')).toHaveTextContent(args.label);
    });
    await step("Shouldn't be active", async () => {
      expect(canvas.getByTestId('checkbox-box')).not.toHaveClass('active');
    });
    await step('Should call onChange function', async () => {
      await userEvent.click(canvas.getByRole('checkbox', {
        hidden: true
      }));
      expect(args.onChange).toHaveBeenCalledWith(!args.isChecked);
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isChecked: true,
    label: 'check me',
    onChange: fn()
  },
  play: async ({
    args,
    userEvent,
    canvas,
    step
  }) => {
    await step('Should render label', () => {
      expect(canvas.getByTestId('checkbox-label')).toHaveTextContent(args.label);
    });
    await step('Should be active', async () => {
      expect(canvas.getByTestId('checkbox-box')).toHaveClass('active');
    });
    await step('Should call onChange function', async () => {
      await userEvent.click(canvas.getByRole('checkbox', {
        hidden: true
      }));
      expect(args.onChange).toHaveBeenCalledWith(!args.isChecked);
    });
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Active,_ as Default,y as __namedExportsOrder,g as default};