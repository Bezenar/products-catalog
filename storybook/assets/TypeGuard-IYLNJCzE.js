import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-f47JZ0le.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-BgFjjjCk.js";function s(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Utilities/TypeGuard`}),`
`,(0,l.jsx)(i,{children:`TypeGuard`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`TypeGuard`}),` provides static predicates for checking common JavaScript value categories. Each predicate accepts `,(0,l.jsx)(n.code,{children:`unknown`}),` and narrows the value's TypeScript type when it returns `,(0,l.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Predicate`}),(0,l.jsx)(`th`,{children:`Returns true for`}),(0,l.jsx)(`th`,{children:`Narrowed type`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`TypeGuard.isString(value)`})}),(0,l.jsx)(`td`,{children:`Primitive strings`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`string`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`TypeGuard.isBoolean(value)`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(`code`,{children:`true`}),` or `,(0,l.jsx)(`code`,{children:`false`})]})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`boolean`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`TypeGuard.isArray(value)`})}),(0,l.jsx)(`td`,{children:`Arrays, including empty arrays`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`unknown[]`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`TypeGuard.isObject(value)`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`Non-null, non-array objects, including instances such as `,(0,l.jsx)(`code`,{children:`Date`})]})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`object`})})]})]})]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.p,{children:`Import the class from the library package:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import { TypeGuard } from 'lib';
`})}),`
`,(0,l.jsx)(n.h3,{id:`check-strings`,children:`Check strings`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`function formatLabel(value: unknown): string {
  if (TypeGuard.isString(value)) {
    return value.trim().toUpperCase();
  }

  return 'UNKNOWN';
}
`})}),`
`,(0,l.jsx)(n.h3,{id:`check-booleans`,children:`Check booleans`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`function describeFlag(value: unknown): string {
  if (TypeGuard.isBoolean(value)) {
    return value ? 'Enabled' : 'Disabled';
  }

  return 'Not a boolean';
}
`})}),`
`,(0,l.jsx)(n.h3,{id:`check-arrays`,children:`Check arrays`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`function itemCount(value: unknown): number {
  if (TypeGuard.isArray(value)) {
    return value.length;
  }

  return 0;
}
`})}),`
`,(0,l.jsx)(n.h3,{id:`check-objects`,children:`Check objects`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`function objectKeys(value: unknown): string[] {
  if (TypeGuard.isObject(value)) {
    return Object.keys(value);
  }

  return [];
}
`})}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`isObject`}),` only checks the broad JavaScript object category. It does not verify an object's properties or guarantee a specific interface; validate the shape separately before relying on particular fields.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};