import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-f47JZ0le.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-BgFjjjCk.js";function s(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Components/Atoms/Popover/Usage`}),`
`,(0,l.jsx)(i,{children:`Popover`}),`
`,(0,l.jsxs)(n.p,{children:[`Popover displays content relative to an anchor. Its visibility is controlled by the
`,(0,l.jsx)(n.code,{children:`isContentVisible`}),` prop, and `,(0,l.jsx)(n.code,{children:`onOutsideClick`}),` lets the owning component decide how to close it.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`<Popover
  anchor={<button type="button">Open options</button>}
  isContentVisible={isOpen}
  onOutsideClick={() => setIsOpen(false)}
  position="bottom-left"
>
  <div>Popover content</div>
</Popover>
`})}),`
`,(0,l.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Prop`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`anchor`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`React.ReactNode`})}),(0,l.jsx)(`td`,{children:`Element used as the positioning anchor.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`children`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`React.ReactNode`})}),(0,l.jsx)(`td`,{children:`Content shown inside the popover.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`isContentVisible`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`boolean`})}),(0,l.jsx)(`td`,{children:`Controls content visibility.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`onOutsideClick`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`() => void`})}),(0,l.jsx)(`td`,{children:`Called on a mouse down outside the popover.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`position`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`PopoverPosition`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`Placement class; defaults to `,(0,l.jsx)(`code`,{children:`bottom-left`}),`.`]})})]})]})]}),`
`,(0,l.jsxs)(n.p,{children:[`Supported position values are `,(0,l.jsx)(n.code,{children:`bottom-left`}),`, `,(0,l.jsx)(n.code,{children:`bottom-right`}),`, `,(0,l.jsx)(n.code,{children:`bottom-center`}),`, `,(0,l.jsx)(n.code,{children:`top-left`}),`,
`,(0,l.jsx)(n.code,{children:`top-right`}),`, `,(0,l.jsx)(n.code,{children:`top-center`}),`, `,(0,l.jsx)(n.code,{children:`left-top`}),`, `,(0,l.jsx)(n.code,{children:`left-center`}),`, `,(0,l.jsx)(n.code,{children:`left-bottom`}),`, `,(0,l.jsx)(n.code,{children:`right-top`}),`, `,(0,l.jsx)(n.code,{children:`right-center`}),`,
and `,(0,l.jsx)(n.code,{children:`right-bottom`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`positioning-note`,children:`Positioning Note`}),`
`,(0,l.jsxs)(n.p,{children:[`Popover coordinates are calculated from the anchor's `,(0,l.jsx)(n.code,{children:`getBoundingClientRect()`}),` and updated on
window scroll. Storybook renders stories inside an iframe, whose viewport can produce different
fixed-position coordinates than the consuming application. This page intentionally documents the
API without embedding a live preview; verify final placement in the application viewport.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};