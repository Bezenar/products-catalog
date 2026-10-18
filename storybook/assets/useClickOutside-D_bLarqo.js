import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-f47JZ0le.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-BgFjjjCk.js";function s(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Hooks/useClickOutside`}),`
`,(0,l.jsx)(i,{children:`useClickOutside`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`useClickOutside`}),` invokes a callback when a `,(0,l.jsx)(n.code,{children:`mousedown`}),` event occurs outside a referenced element.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { useRef } from 'react';
import useClickOutside from './useClickOutside';

function Menu({ onDismiss }: { onDismiss: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, onDismiss);

  return (
    <div ref={menuRef}>
      <button type="button">Menu item</button>
    </div>
  );
}
`})}),`
`,(0,l.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`useClickOutside<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  callback: (event: MouseEvent) => void,
): void;
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The callback receives the original `,(0,l.jsx)(n.code,{children:`MouseEvent`}),`. Events whose target is inside the referenced
element are ignored, as are events fired while the ref is empty. The hook listens on `,(0,l.jsx)(n.code,{children:`document`}),` and
stops propagation for document `,(0,l.jsx)(n.code,{children:`mousedown`}),` events.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};