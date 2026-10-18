import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bz3bErIl.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-5N3tTDpN.js";function s(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Hooks/useEventListener`}),`
`,(0,l.jsx)(i,{children:`useEventListener`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`useEventListener`}),` registers an event handler on `,(0,l.jsx)(n.code,{children:`window`}),` or on a supplied `,(0,l.jsx)(n.code,{children:`HTMLElement`}),` and removes
the listener when its effect is cleaned up.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import useEventListener from './useEventListener';

function WindowSize() {
  useEventListener('resize', () => {
    console.log(window.innerWidth);
  });

  return <output>{window.innerWidth}</output>;
}
`})}),`
`,(0,l.jsx)(n.p,{children:`To listen on an element, provide it as the third argument:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`useEventListener('scroll', handleScroll, document.body);
`})}),`
`,(0,l.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`useEventListener(
  eventName: string,
  handler: (event?: Event) => void,
  element?: HTMLElement | Window,
): void;
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The target defaults to `,(0,l.jsx)(n.code,{children:`window`}),`. The most recent handler is called after rerenders without
re-registering solely because the handler function changed. Changing `,(0,l.jsx)(n.code,{children:`eventName`}),` or `,(0,l.jsx)(n.code,{children:`element`}),`
replaces the listener, and unmounting removes it.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};