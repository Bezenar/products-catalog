import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-B0iyQvc5.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./SearchIcon-CigGf8ZT.js";import{n as a,t as o}from"./List-BMgRv6Rh.js";import{n as s,t as c}from"./Popover-DLQAOAPT.js";import{n as l,t as u}from"./SearchListItem-8akiBbX8.js";import{n as d,t as f}from"./TextField-BfF-amEX.js";var p,m;function h(){return(h=e((()=>{p=`_listWrapper_6nl1o_1`,m={listWrapper:p}})))()}function g({value:e=``,label:t,placeholder:n,debounceMs:r=300,options:a,onChange:s}){let[l,d]=(0,_.useState)(!1),p=(0,_.useMemo)(()=>e?a.filter(t=>t.product.name.toLowerCase().includes(e.toLowerCase())):[],[e,a]);return(0,_.useEffect)(()=>{p.length>=1&&e!==``&&d(!0)},[p.length,e]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(c,{isContentVisible:p.length>1&&l,onOutsideClick:()=>d(!1),anchor:(0,v.jsx)(f,{icon:(0,v.jsx)(i,{}),width:`20rem`,value:e,label:t,placeholder:n,debounceMs:r,onChange:s,onClear:()=>s(``)}),children:(0,v.jsx)(`div`,{className:m.listWrapper,children:(0,v.jsx)(o,{items:p,renderItem:e=>(0,v.jsx)(u,{primaryText:e.product.name,secondaryText:e.shortnames?.[0]??`---`,onClick:()=>{d(!1),s(e.product.name)}})})})})})}var _,v;function y(){return(y=e((()=>{_=t(),r(),a(),s(),l(),d(),h(),v=n(),g.__docgenInfo={description:``,methods:[],displayName:`Search`,props:{label:{required:!0,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},placeholder:{required:!0,tsType:{name:`string`},description:``},debounceMs:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}},popoverWidth:{required:!1,tsType:{name:`ReactCSSProperties['width']`,raw:`React.CSSProperties['width']`},description:``},popoverMaxHeight:{required:!1,tsType:{name:`ReactCSSProperties['maxHeight']`,raw:`React.CSSProperties['maxHeight']`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`Array<T>`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}function b(e){let[t,n]=(0,x.useState)(e.value??``);return(0,S.jsx)(g,{...e,value:t,onChange:t=>{n(t),e.onChange(t)}})}var x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{x=t(),y(),S=n(),{fn:C,expect:w,waitFor:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Molecules/Search`,component:b,argTypes:{value:{control:`text`,description:`Initial text used to populate the search field.`,type:{name:`string`,required:!1},table:{type:{summary:`string`},defaultValue:{summary:`''`}}},label:{control:`text`,description:`Accessible label for the search field.`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},placeholder:{control:`text`,description:`Placeholder shown while the search field is empty and unfocused.`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},options:{control:!1,description:`Items filtered by their product name and displayed in the results list.`,type:{name:`other`,value:``,required:!0},table:{type:{summary:`T[]`}}},onChange:{action:`result selected`,control:!1,description:`Called with the selected result product name.`,type:{name:`function`,required:!0},table:{type:{summary:`(value: string) => void`}}}}},D={args:{value:``,label:`Search devices`,placeholder:`Search...`,options:[{id:`1`,name:`Router`,product:{name:`Dream Router`},shortnames:[`UDR`]},{id:`2`,name:`Router Pro`,product:{name:`Dream Router Pro`},shortnames:[`UDRP`]},{id:`3`,name:`Switch`,product:{name:`Switch 8`}}],onChange:C()},play:async({args:e,canvas:t,step:n,userEvent:r})=>{await n(`Should expose the provided accessible label`,async()=>{w(t.getByRole(`textbox`,{name:e.label})).toBeTruthy()}),await n(`Should render with provided value`,async()=>{w(t.getByRole(`textbox`,{name:e.label})).toHaveValue(e.value)}),await n(`Should render with provided placeholder`,async()=>{w(t.getByRole(`textbox`,{name:e.label})).toHaveAttribute(`placeholder`,e.placeholder)}),await n(`With empty value should hide options`,async()=>{w(t.getByTestId(`popover-content`)).not.toBeVisible()}),await n(`With several matches should show options`,async()=>{await r.type(t.getByRole(`textbox`,{name:e.label}),`dream`),await T(()=>w(t.getByTestId(`popover-content`)).toBeVisible())}),await n(`Should list every matching product name`,async()=>{w(t.getAllByTestId(`primary-text`).map(e=>e.textContent)).toEqual([`Dream Router`,`Dream Router Pro`])}),await n(`Should show the shortname of each match`,async()=>{w(t.getAllByTestId(`secondary-text`).map(e=>e.textContent)).toEqual([`UDR`,`UDRP`])}),await n(`Should notify when a result is selected`,async()=>{await r.click(t.getByText(`Dream Router Pro`)),w(e.onChange).toHaveBeenCalledWith(`Dream Router Pro`)}),await n(`Should close the results after selection`,async()=>{await T(()=>w(t.getByTestId(`popover-content`)).not.toBeVisible())})}},O=[`Default`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Search devices',
    placeholder: 'Search...',
    options: [{
      id: '1',
      name: 'Router',
      product: {
        name: 'Dream Router'
      },
      shortnames: ['UDR']
    }, {
      id: '2',
      name: 'Router Pro',
      product: {
        name: 'Dream Router Pro'
      },
      shortnames: ['UDRP']
    }, {
      id: '3',
      name: 'Switch',
      product: {
        name: 'Switch 8'
      }
    }],
    onChange: fn()
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    await step('Should expose the provided accessible label', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toBeTruthy();
    });
    await step('Should render with provided value', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toHaveValue(args.value);
    });
    await step('Should render with provided placeholder', async () => {
      expect(canvas.getByRole('textbox', {
        name: args.label
      })).toHaveAttribute('placeholder', args.placeholder);
    });
    await step('With empty value should hide options', async () => {
      expect(canvas.getByTestId('popover-content')).not.toBeVisible();
    });
    await step('With several matches should show options', async () => {
      await userEvent.type(canvas.getByRole('textbox', {
        name: args.label
      }), 'dream');
      await waitFor(() => expect(canvas.getByTestId('popover-content')).toBeVisible());
    });
    await step('Should list every matching product name', async () => {
      expect(canvas.getAllByTestId('primary-text').map(item => item.textContent)).toEqual(['Dream Router', 'Dream Router Pro']);
    });
    await step('Should show the shortname of each match', async () => {
      expect(canvas.getAllByTestId('secondary-text').map(item => item.textContent)).toEqual(['UDR', 'UDRP']);
    });
    await step('Should notify when a result is selected', async () => {
      await userEvent.click(canvas.getByText('Dream Router Pro'));
      expect(args.onChange).toHaveBeenCalledWith('Dream Router Pro');
    });
    await step('Should close the results after selection', async () => {
      await waitFor(() => expect(canvas.getByTestId('popover-content')).not.toBeVisible());
    });
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Default,O as __namedExportsOrder,E as default};