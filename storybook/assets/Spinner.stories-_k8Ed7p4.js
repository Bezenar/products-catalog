import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./cn-SWPk7jUc.js";var i,a,o,s,c;function l(){return(l=e((()=>{i=`_spinner_15q3a_1`,a=`_indicator_15q3a_18`,o=`_spin_15q3a_1`,s=`_label_15q3a_42`,c={spinner:i,indicator:a,spin:o,label:s}})))()}var u,d;function f(){return(f=e((()=>{n(),l(),u=t(),d=({label:e,size:t=`md`})=>(0,u.jsxs)(`div`,{className:r(c.spinner,t),role:`status`,"aria-label":e,children:[(0,u.jsx)(`span`,{className:r(c.indicator,t),"aria-hidden":`true`}),e&&(0,u.jsx)(`span`,{className:r(c.label,t),children:e})]}),d.__docgenInfo={description:``,methods:[],displayName:`Spinner`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1}}}})))()}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{f(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Atoms/Spinner`,component:d,argTypes:{size:{control:`select`,options:[`xl`,`md`,`sm`],description:`Display size based on the loading context.`,type:{name:`enum`,value:[`xl`,`md`,`sm`],required:!1},table:{type:{summary:`'xl' | 'md' | 'sm'`},defaultValue:{summary:`md`}}},label:{control:`text`,description:`Optional visible loading text and accessible status name. Defaults to Loading.`,type:{name:`string`,required:!1},table:{type:{summary:`string`},defaultValue:{summary:`Loading`}}}}},h={args:{size:`md`,label:`Loading`},play:async({canvas:e})=>{p(e.getByRole(`status`,{name:`Loading`})).toBeVisible()}},g={args:{size:`xl`,label:`Loading products`},play:async({args:e,canvas:t})=>{p(t.getByRole(`status`,{name:e.label})).toBeVisible(),p(t.getByText(e.label)).toBeVisible()}},_={args:{size:`md`,label:`Loading category`},play:async({args:e,canvas:t})=>{p(t.getByRole(`status`,{name:e.label})).toBeVisible(),p(t.getByText(e.label)).toBeVisible()}},v={args:{size:`sm`,label:`Loading items`},play:async({args:e,canvas:t})=>{p(t.getByRole(`status`,{name:e.label})).toBeVisible(),p(t.getByText(e.label)).toBeVisible()}},y=[`Default`,`XLSpinner`,`MDSpinner`,`SMSpinner`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('status', {
      name: 'Loading'
    })).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    label: 'Loading products'
  },
  play: async ({
    args,
    canvas
  }) => {
    expect(canvas.getByRole('status', {
      name: args.label
    })).toBeVisible();
    expect(canvas.getByText(args.label as string)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading category'
  },
  play: async ({
    args,
    canvas
  }) => {
    expect(canvas.getByRole('status', {
      name: args.label
    })).toBeVisible();
    expect(canvas.getByText(args.label as string)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Loading items'
  },
  play: async ({
    args,
    canvas
  }) => {
    expect(canvas.getByRole('status', {
      name: args.label
    })).toBeVisible();
    expect(canvas.getByText(args.label as string)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{h as Default,_ as MDSpinner,v as SMSpinner,g as XLSpinner,y as __namedExportsOrder,m as default};