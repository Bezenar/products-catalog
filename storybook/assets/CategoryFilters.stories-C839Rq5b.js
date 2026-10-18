import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-COvShyDw.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./cn-SWPk7jUc.js";import{n as a,t as o}from"./FilterButton-a2dufUOV.js";import{n as s,t as c}from"./List-BMgRv6Rh.js";import{n as l,t as u}from"./Popover-CTX92avY.js";var d,f,p;function m(){return(m=e((()=>{d=`_container_xz3iv_1`,f=`_resetButton_xz3iv_5`,p={container:d,resetButton:f}})))()}function h({label:e,listHeading:t,options:n,renderOption:r,onReset:a}){let s=(0,g.useRef)(null),[l,d]=(0,g.useState)(!1);return(0,_.jsx)(u,{anchor:(0,_.jsx)(`span`,{ref:s,children:(0,_.jsx)(o,{label:e,isActive:l,onClick:()=>d(e=>!e)})}),isContentVisible:l,onOutsideClick:()=>l&&d(!1),position:`bottom-right`,children:(0,_.jsxs)(`div`,{className:i(`flex dir-col gap-4 pa-4`,p.container),children:[!!t&&(0,_.jsx)(`h6`,{"data-testid":`category-filter-heading`,className:`ff fw--700 ts--md lh--md`,children:t}),(0,_.jsx)(c,{items:n,renderItem:r}),!!a&&(0,_.jsx)(`button`,{"data-testid":`category-filter-reset`,className:p.resetButton,onClick:a.onClick,disabled:a.disabled,children:`Reset`})]})})}var g,_;function v(){return(v=e((()=>{g=t(),r(),a(),s(),l(),m(),_=n(),h.__docgenInfo={description:``,methods:[],displayName:`CategoryFilters`,props:{label:{required:!0,tsType:{name:`string`},description:``},listHeading:{required:!1,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},renderOption:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(option: T) => React.ReactNode`,signature:{arguments:[{type:{name:`T`},name:`option`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:``},onReset:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  disabled: boolean;
  onClick: () => void;
}`,signature:{properties:[{key:`disabled`,value:{name:`boolean`,required:!0}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},description:``}}}})))()}var y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{v(),y=n(),{expect:b,fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Molecules/CategoryFilters`,component:h,parameters:{layout:`centered`,docs:{description:{component:`> **NOTE:** Storybook renders stories inside an iframe, whose viewport can produce different fixed-position coordinates than the consuming application. This page intentionally documents theAPI without embedding a live preview. You can check component stories in storybook.`}}},argTypes:{label:{control:`text`,description:`Text displayed on the filter button.`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},listHeading:{control:`text`,description:`Optional heading displayed above the options.`,type:{name:`string`,required:!1},table:{type:{summary:`string`}}},options:{control:!1,description:`Options rendered inside the filter popover.`,type:{name:`other`,value:``,required:!0},table:{type:{summary:`T[]`}}},renderOption:{control:!1,description:`Renders an option in the filter list.`,type:{name:`function`,required:!0},table:{type:{summary:`(option: T) => React.ReactNode`}}},onReset:{control:!1,description:`Optional Reset button configuration and click handler.`,type:{name:`other`,value:`{ disabled: boolean; onClick: () => void }`},table:{type:{summary:`{ disabled: boolean; onClick: () => void }`}}}}},C={args:{label:`Category`,options:[{id:`1`,name:`Routers`},{id:`2`,name:`Switches`},{id:`3`,name:`Access points`}],renderOption:e=>(0,y.jsx)(`span`,{"data-testid":`category-filter-option`,children:e.name})},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Should render the filter button`,async()=>{b(t.getByRole(`button`,{name:e.label})).toBeTruthy()}),await r(`On button click should open the popover`,async()=>{await n.click(t.getByRole(`button`,{name:e.label})),b(t.getAllByTestId(`category-filter-option`)[0]).toBeVisible()}),await r(`Should not render the heading`,async()=>{b(t.queryByTestId(`category-filter-heading`)).not.toBeInTheDocument()}),await r(`Should not render the reset button`,async()=>{b(t.queryByTestId(`category-filter-reset`)).not.toBeInTheDocument()})}},w={args:{label:`Category`,listHeading:`Available Categories`,options:[{id:`1`,name:`Routers`},{id:`2`,name:`Switches`},{id:`3`,name:`Access points`}],renderOption:e=>(0,y.jsx)(`span`,{"data-testid":`category-filter-option`,children:e.name})},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Should render the filter button`,async()=>{b(t.getByRole(`button`,{name:e.label})).toBeTruthy()}),await r(`On button click should open the popover`,async()=>{await n.click(t.getByRole(`button`,{name:e.label})),b(t.getAllByTestId(`category-filter-option`)[0]).toBeVisible()}),await r(`Should render the heading`,async()=>{b(t.queryByTestId(`category-filter-heading`)).toBeInTheDocument()}),await r(`Should not render the reset button`,async()=>{b(t.queryByTestId(`category-filter-reset`)).not.toBeInTheDocument()})}},T={args:{label:`Category`,options:[{id:`1`,name:`Routers`},{id:`2`,name:`Switches`},{id:`3`,name:`Access points`}],renderOption:e=>(0,y.jsx)(`span`,{"data-testid":`category-filter-option`,children:e.name}),onReset:{disabled:!1,onClick:x()}},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Should render the filter button`,async()=>{b(t.getByRole(`button`,{name:e.label})).toBeTruthy()}),await r(`On button click should open the popover`,async()=>{await n.click(t.getByRole(`button`,{name:e.label})),b(t.getAllByTestId(`category-filter-option`)[0]).toBeVisible()}),await r(`Should not render the heading`,async()=>{b(t.queryByTestId(`category-filter-heading`)).not.toBeInTheDocument()}),await r(`Should render the reset button`,async()=>{b(t.getByTestId(`category-filter-reset`)).toBeInTheDocument()}),await r(`Click on reset button should call onReset.onClick`,async()=>{await n.click(t.getByTestId(`category-filter-reset`)),b(e.onReset.onClick).toHaveBeenCalled()})}},E={args:{label:`Category`,options:[{id:`1`,name:`Routers`},{id:`2`,name:`Switches`},{id:`3`,name:`Access points`}],renderOption:e=>(0,y.jsx)(`span`,{"data-testid":`category-filter-option`,children:e.name}),onReset:{disabled:!0,onClick:x()}},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Should render the filter button`,async()=>{b(t.getByRole(`button`,{name:e.label})).toBeTruthy()}),await r(`On button click should open the popover`,async()=>{await n.click(t.getByRole(`button`,{name:e.label})),b(t.getAllByTestId(`category-filter-option`)[0]).toBeVisible()}),await r(`Should not render the heading`,async()=>{b(t.queryByTestId(`category-filter-heading`)).not.toBeInTheDocument()}),await r(`Should render the reset button`,async()=>{b(t.getByTestId(`category-filter-reset`)).toBeInTheDocument()}),await r(`Should render the reset button as disabled`,async()=>{b(t.getByTestId(`category-filter-reset`)).toBeDisabled()}),await r(`Click on reset button should not call onReset.onClick`,async()=>{await n.click(t.getByTestId(`category-filter-reset`)),b(e.onReset.onClick).not.toHaveBeenCalled()})}},D=[`Default`,`WithListHeading`,`WithActiveResetButton`,`WithDisabledResetButton`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    options: [{
      id: '1',
      name: 'Routers'
    }, {
      id: '2',
      name: 'Switches'
    }, {
      id: '3',
      name: 'Access points'
    }],
    renderOption: option => <span data-testid="category-filter-option">{option.name}</span>
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Should render the filter button', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toBeTruthy();
    });
    await step('On button click should open the popover', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.label
      }));
      expect(canvas.getAllByTestId('category-filter-option')[0]).toBeVisible();
    });
    await step('Should not render the heading', async () => {
      expect(canvas.queryByTestId('category-filter-heading')).not.toBeInTheDocument();
    });
    await step('Should not render the reset button', async () => {
      expect(canvas.queryByTestId('category-filter-reset')).not.toBeInTheDocument();
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    listHeading: 'Available Categories',
    options: [{
      id: '1',
      name: 'Routers'
    }, {
      id: '2',
      name: 'Switches'
    }, {
      id: '3',
      name: 'Access points'
    }],
    renderOption: option => <span data-testid="category-filter-option">{option.name}</span>
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Should render the filter button', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toBeTruthy();
    });
    await step('On button click should open the popover', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.label
      }));
      expect(canvas.getAllByTestId('category-filter-option')[0]).toBeVisible();
    });
    await step('Should render the heading', async () => {
      expect(canvas.queryByTestId('category-filter-heading')).toBeInTheDocument();
    });
    await step('Should not render the reset button', async () => {
      expect(canvas.queryByTestId('category-filter-reset')).not.toBeInTheDocument();
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    options: [{
      id: '1',
      name: 'Routers'
    }, {
      id: '2',
      name: 'Switches'
    }, {
      id: '3',
      name: 'Access points'
    }],
    renderOption: option => <span data-testid="category-filter-option">{option.name}</span>,
    onReset: {
      disabled: false,
      onClick: fn()
    }
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Should render the filter button', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toBeTruthy();
    });
    await step('On button click should open the popover', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.label
      }));
      expect(canvas.getAllByTestId('category-filter-option')[0]).toBeVisible();
    });
    await step('Should not render the heading', async () => {
      expect(canvas.queryByTestId('category-filter-heading')).not.toBeInTheDocument();
    });
    await step('Should render the reset button', async () => {
      expect(canvas.getByTestId('category-filter-reset')).toBeInTheDocument();
    });
    await step('Click on reset button should call onReset.onClick', async () => {
      await userEvent.click(canvas.getByTestId('category-filter-reset'));
      expect(args.onReset!.onClick).toHaveBeenCalled();
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    options: [{
      id: '1',
      name: 'Routers'
    }, {
      id: '2',
      name: 'Switches'
    }, {
      id: '3',
      name: 'Access points'
    }],
    renderOption: option => <span data-testid="category-filter-option">{option.name}</span>,
    onReset: {
      disabled: true,
      onClick: fn()
    }
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Should render the filter button', async () => {
      expect(canvas.getByRole('button', {
        name: args.label
      })).toBeTruthy();
    });
    await step('On button click should open the popover', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.label
      }));
      expect(canvas.getAllByTestId('category-filter-option')[0]).toBeVisible();
    });
    await step('Should not render the heading', async () => {
      expect(canvas.queryByTestId('category-filter-heading')).not.toBeInTheDocument();
    });
    await step('Should render the reset button', async () => {
      expect(canvas.getByTestId('category-filter-reset')).toBeInTheDocument();
    });
    await step('Should render the reset button as disabled', async () => {
      expect(canvas.getByTestId('category-filter-reset')).toBeDisabled();
    });
    await step('Click on reset button should not call onReset.onClick', async () => {
      await userEvent.click(canvas.getByTestId('category-filter-reset'));
      expect(args.onReset!.onClick).not.toHaveBeenCalled();
    });
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{C as Default,T as WithActiveResetButton,E as WithDisabledResetButton,w as WithListHeading,D as __namedExportsOrder,S as default};