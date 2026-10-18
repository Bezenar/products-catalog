import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./cn-SWPk7jUc.js";import{n as i,t as a}from"./Cell-UaAebcls.js";import{n as o,t as s}from"./EmptyView-Q2Gy2QsC.js";import{n as c,t as l}from"./Row-CWnEmtXk.js";import{n as u,t as d}from"./InteractiveRow-HGQqT-dr.js";var f,p;function m(){return(m=e((()=>{f=`_headCell_m0u6j_1`,p={headCell:f}})))()}var h,g;function _(){return(_=e((()=>{n(),m(),h=t(),g=({col:e})=>(0,h.jsx)(`th`,{className:r(p.headCell,`ff text--primary ts--md ln--md fw--700`),style:{width:e.width},children:e.label}),g.displayName=`Table.HeadCell`,g.__docgenInfo={description:``,methods:[],displayName:`Table.HeadCell`}})))()}var v,y;function b(){return(b=e((()=>{_(),c(),v=t(),y=({colSchema:e})=>(0,v.jsx)(`thead`,{children:(0,v.jsx)(l,{children:e.map(e=>(0,v.jsx)(g,{col:e},e.id))})}),y.displayName=`Table.Head`,y.__docgenInfo={description:``,methods:[],displayName:`Table.Head`}})))()}var x,S;function C(){return(C=e((()=>{x=`_table_edpdr_1`,S={table:x}})))()}function w({colSchema:e,items:t,rowRender:n,emptyView:r}){let i=t.length===0;return(0,T.jsxs)(`table`,{className:S.table,children:[(0,T.jsx)(y,{colSchema:e}),(0,T.jsxs)(`tbody`,{children:[i&&r,!i&&t.map(e=>n(e))]})]})}var T;function E(){return(E=e((()=>{i(),o(),b(),u(),c(),C(),T=t(),w.InteractiveRow=d,w.Row=l,w.EmptyView=s,w.Cell=a,w.__docgenInfo={description:``,methods:[{name:`InteractiveRow`,docblock:null,modifiers:[`static`],params:[{name:`{ children, onClick }`,optional:!1,type:null}],returns:null},{name:`Row`,docblock:null,modifiers:[`static`],params:[{name:`{ children }`,optional:!1,type:null}],returns:null},{name:`EmptyView`,docblock:null,modifiers:[`static`],params:[{name:`{ colspan }`,optional:!1,type:null}],returns:null},{name:`Cell`,docblock:null,modifiers:[`static`],params:[{name:`{ children }`,optional:!1,type:null}],returns:null}],displayName:`Table`,props:{colSchema:{required:!0,tsType:{name:`Array`,elements:[{name:`I_ColSchemaItem`}],raw:`I_ColSchemaItem[]`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},rowRender:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item: T) => React.ReactNode`,signature:{arguments:[{type:{name:`T`},name:`item`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:``},emptyView:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{E(),D=t(),{expect:O,fn:k}=__STORYBOOK_MODULE_TEST__,A=[{id:`id`,label:`ID`,width:`80px`},{id:`line`,label:`Product line`},{id:`name`,label:`Name`}],j=[{id:`1`,line:`Network`,name:`Dream Router`},{id:`2`,line:`Network`,name:`Switch 8`},{id:`3`,line:`Protect`,name:`Camera`}],M=e=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(w.Cell,{children:e.id}),(0,D.jsx)(w.Cell,{children:e.line}),(0,D.jsx)(w.Cell,{children:e.name})]}),N=k(),P={title:`Components/Organisms/Table`,component:w,parameters:{docs:{description:{component:"Renders a table from a column schema and a list of items. Compose rows with `Table.Row` or `Table.InteractiveRow`, cells with `Table.Cell`, and the empty state with `Table.EmptyView`. See the Usage page for details."}}},argTypes:{colSchema:{control:!1,description:`Column definitions used to render the header cells.`,type:{name:`other`,value:``,required:!0},table:{type:{summary:`I_ColSchemaItem[]`,detail:`interface I_ColSchemaItem {
  id: string;
  label: string;
  width?: React.CSSProperties["width"];
}`}}},items:{control:!1,description:"Items to render. Each item must have a string `id`.",type:{name:`other`,value:``,required:!0},table:{type:{summary:`T[]`}}},rowRender:{control:!1,description:"Called once per item to render its row. The returned element needs a `key`.",type:{name:`function`,required:!0},table:{type:{summary:`(item: T) => React.ReactNode`}}},emptyView:{control:!1,description:"Rendered in the table body instead of rows when `items` is empty.",type:{name:`other`,value:``,required:!1},table:{type:{summary:`React.ReactNode`}}}},args:{colSchema:A,items:j,rowRender:e=>(0,D.jsx)(w.Row,{children:M(e)},e.id)}},F={play:async({canvas:e,step:t})=>{await t(`Should render a column header for each schema item`,async()=>{O(e.getAllByRole(`columnheader`)).toHaveLength(A.length)}),await t(`Should apply the configured column width`,async()=>{O(e.getByRole(`columnheader`,{name:`ID`})).toHaveStyle({width:`80px`})}),await t(`Should render a body row for each item`,async()=>{O(e.getAllByRole(`row`)).toHaveLength(j.length+1)})}},I={args:{rowRender:e=>(0,D.jsx)(w.InteractiveRow,{onClick:()=>N(e.id),children:M(e)},e.id)},beforeEach:()=>{N.mockClear()},play:async({canvas:e,step:t,userEvent:n})=>{await t(`Should make rows keyboard focusable`,async()=>{O(e.getAllByRole(`row`)[1]).toHaveAttribute(`tabindex`,`0`)}),await t(`Should call onClick when a row is clicked`,async()=>{await n.click(e.getByText(`Dream Router`)),O(N).toHaveBeenLastCalledWith(`1`)}),await t(`Should call onClick when Enter is pressed on a focused row`,async()=>{e.getAllByRole(`row`)[2].focus(),await n.keyboard(`{Enter}`),O(N).toHaveBeenLastCalledWith(`2`)})}},L={args:{items:[],emptyView:(0,D.jsx)(w.EmptyView,{colspan:A.length})},play:async({canvas:e,step:t})=>{await t(`Should show the empty message`,async()=>{O(e.getByText(`No data available`)).toBeVisible()}),await t(`Should span every column`,async()=>{O(e.getByText(`No data available`)).toHaveAttribute(`colspan`,String(A.length))}),await t(`Should keep the column headers`,async()=>{O(e.getAllByRole(`columnheader`)).toHaveLength(A.length)})}},R=[`Default`,`WithInteractiveRows`,`WithEmptyView`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step
  }) => {
    await step('Should render a column header for each schema item', async () => {
      expect(canvas.getAllByRole('columnheader')).toHaveLength(colSchema.length);
    });
    await step('Should apply the configured column width', async () => {
      expect(canvas.getByRole('columnheader', {
        name: 'ID'
      })).toHaveStyle({
        width: '80px'
      });
    });
    await step('Should render a body row for each item', async () => {
      // One header row plus one row per item.
      expect(canvas.getAllByRole('row')).toHaveLength(items.length + 1);
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    rowRender: device => <Table.InteractiveRow key={device.id} onClick={() => onRowClick(device.id)}>
        {renderCells(device)}
      </Table.InteractiveRow>
  },
  beforeEach: () => {
    onRowClick.mockClear();
  },
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Should make rows keyboard focusable', async () => {
      expect(canvas.getAllByRole('row')[1]).toHaveAttribute('tabindex', '0');
    });
    await step('Should call onClick when a row is clicked', async () => {
      await userEvent.click(canvas.getByText('Dream Router'));
      expect(onRowClick).toHaveBeenLastCalledWith('1');
    });
    await step('Should call onClick when Enter is pressed on a focused row', async () => {
      canvas.getAllByRole('row')[2].focus();
      await userEvent.keyboard('{Enter}');
      expect(onRowClick).toHaveBeenLastCalledWith('2');
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyView: <Table.EmptyView colspan={colSchema.length} />
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Should show the empty message', async () => {
      expect(canvas.getByText('No data available')).toBeVisible();
    });
    await step('Should span every column', async () => {
      expect(canvas.getByText('No data available')).toHaveAttribute('colspan', String(colSchema.length));
    });
    await step('Should keep the column headers', async () => {
      expect(canvas.getAllByRole('columnheader')).toHaveLength(colSchema.length);
    });
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{F as Default,L as WithEmptyView,I as WithInteractiveRows,R as __namedExportsOrder,P as default};