import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-xI6yO-mC.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-BjpBE4zH.js";function s(e){let n={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Components/Organisms/Table/Usage`}),`
`,(0,l.jsx)(i,{children:`Table`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`Table`}),` renders a header row from a column schema and a body from a list of items. You decide how each row looks by returning compound components from `,(0,l.jsx)(n.code,{children:`rowRender`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import Table, { type I_ColSchemaItem } from 'lib/organisms/Table';
`})}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`type Device = { id: string; line: string; name: string };

const colSchema: I_ColSchemaItem[] = [
  { id: 'line', label: 'Product line' },
  { id: 'name', label: 'Name', width: '50%' },
];

function DevicesTable({ devices }: { devices: Device[] }) {
  return (
    <Table<Device>
      colSchema={colSchema}
      items={devices}
      emptyView={<Table.EmptyView colspan={colSchema.length} />}
      rowRender={(device) => (
        <Table.Row key={device.id}>
          <Table.Cell>{device.line}</Table.Cell>
          <Table.Cell>{device.name}</Table.Cell>
        </Table.Row>
      )}
    />
  );
}
`})}),`
`,(0,l.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Prop`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`colSchema`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`I_ColSchemaItem[]`})}),(0,l.jsx)(`td`,{children:`Column definitions. One header cell is rendered per entry.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`items`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`T[]`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`Items to render, where `,(0,l.jsxs)(`code`,{children:[`T extends `,`{ id: string }`]}),`.`]})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`rowRender`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`(item: T) => React.ReactNode`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`Called once per item to render its row. The returned element needs a `,(0,l.jsx)(`code`,{children:`key`}),`.`]})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`emptyView`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`React.ReactNode`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`Optional. Rendered in the table body instead of rows when `,(0,l.jsx)(`code`,{children:`items`}),` is empty.`]})})]})]})]}),`
`,(0,l.jsx)(n.h3,{id:`column-schema`,children:`Column schema`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`interface I_ColSchemaItem {
  id: string;
  label: string;
  width?: React.CSSProperties['width'];
}
`})}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`id`}),` is used as the header cell key, so it must be unique. `,(0,l.jsx)(n.code,{children:`width`}),` is set on the header cell, which sizes the whole column; leave it out for columns that should fill the remaining space. Use an empty `,(0,l.jsx)(n.code,{children:`label`}),` for a column that has no heading, such as an icon column.`]}),`
`,(0,l.jsx)(n.h2,{id:`compound-components`,children:`Compound components`}),`
`,(0,l.jsxs)(n.p,{children:[`The compounds are attached to `,(0,l.jsx)(n.code,{children:`Table`}),` and are used inside `,(0,l.jsx)(n.code,{children:`rowRender`}),` and `,(0,l.jsx)(n.code,{children:`emptyView`}),`.`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Compound`}),(0,l.jsx)(`th`,{children:`Renders`}),(0,l.jsx)(`th`,{children:`Props`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`Table.Row`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`A plain `,(0,l.jsx)(`code`,{children:`tr`}),`.`]})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`children`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`Table.InteractiveRow`})}),(0,l.jsx)(`td`,{children:`A focusable, clickable row.`}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(`code`,{children:`onClick`}),`, `,(0,l.jsx)(`code`,{children:`children`})]})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`Table.Cell`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`A `,(0,l.jsx)(`code`,{children:`td`}),` with the table's cell padding and border.`]})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`children`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`Table.EmptyView`})}),(0,l.jsx)(`td`,{children:`A single full-width row that reads "No data available".`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`colspan`})})]})]})]}),`
`,(0,l.jsxs)(n.p,{children:[`The header row and header cells are generated from `,(0,l.jsx)(n.code,{children:`colSchema`}),` and are not exposed as compounds.`]}),`
`,(0,l.jsx)(n.h3,{id:`interactive-rows`,children:`Interactive rows`}),`
`,(0,l.jsxs)(n.p,{children:[`Use `,(0,l.jsx)(n.code,{children:`Table.InteractiveRow`}),` when selecting a row should do something, such as opening a details page:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`<Table<Device>
  colSchema={colSchema}
  items={devices}
  rowRender={(device) => (
    <Table.InteractiveRow key={device.id} onClick={() => navigate(\`/product/\${device.id}\`)}>
      <Table.Cell>{device.line}</Table.Cell>
      <Table.Cell>{device.name}</Table.Cell>
    </Table.InteractiveRow>
  )}
/>
`})}),`
`,(0,l.jsxs)(n.p,{children:[`An interactive row has `,(0,l.jsx)(n.code,{children:`tabIndex={0}`}),`, so it can be reached with the keyboard. `,(0,l.jsx)(n.code,{children:`onClick`}),` is called when the row is clicked, and when `,(0,l.jsx)(n.strong,{children:`Enter`}),` is pressed while the row itself has focus.`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:`Space does not activate the row.`}),`
`,(0,l.jsx)(n.li,{children:`Key presses are ignored when they come from a control inside a cell, so a button or input in the row keeps its own behavior.`}),`
`,(0,l.jsxs)(n.li,{children:[`Mouse clicks on those inner controls still bubble to the row. Call `,(0,l.jsx)(n.code,{children:`event.stopPropagation()`}),` in the control's click handler if the row should not react.`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`empty-state`,children:`Empty state`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`emptyView`}),` is only rendered when `,(0,l.jsx)(n.code,{children:`items`}),` is empty. Pass `,(0,l.jsx)(n.code,{children:`Table.EmptyView`}),` with the number of columns so the message spans the full width:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`<Table<Device>
  colSchema={colSchema}
  items={[]}
  emptyView={<Table.EmptyView colspan={colSchema.length} />}
  rowRender={renderRow}
/>
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The header stays visible. If `,(0,l.jsx)(n.code,{children:`emptyView`}),` is omitted, an empty table body is rendered.`]}),`
`,(0,l.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,l.jsxs)(n.p,{children:[`Interactive examples with the table, interactive rows, and the empty state are listed under `,(0,l.jsx)(n.strong,{children:`Components → Organisms → Table`}),`.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};