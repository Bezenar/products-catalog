import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-xI6yO-mC.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-BjpBE4zH.js";function s(e){let n={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Utilities/cn`}),`
`,(0,l.jsx)(i,{children:`cn`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`cn`}),` builds a class-name string from string arguments and conditional class maps. Arguments are processed from left to right, and the final result is trimmed.`]}),`
`,(0,l.jsx)(n.h2,{id:`type-signature`,children:`Type signature`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`function cn(...args: unknown[]): string;
`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Arguments:`}),` any number of values typed as `,(0,l.jsx)(n.code,{children:`unknown`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`String arguments:`}),` appended to the result in the order supplied.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Object arguments:`}),` keys are appended only when their values are the boolean `,(0,l.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Other values:`}),` numbers, booleans, `,(0,l.jsx)(n.code,{children:`null`}),`, `,(0,l.jsx)(n.code,{children:`undefined`}),`, arrays, and object properties with non-boolean values are ignored.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Return value:`}),` a space-separated `,(0,l.jsx)(n.code,{children:`string`}),`; duplicate class names are preserved.`]}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import { cn } from 'lib/utils';
`})}),`
`,(0,l.jsx)(n.h2,{id:`join-static-classes`,children:`Join static classes`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`const buttonClassName = cn('button', 'button-primary');
// "button button-primary"
`})}),`
`,(0,l.jsx)(n.h2,{id:`add-conditional-classes`,children:`Add conditional classes`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`const isActive = true;
const isDisabled = false;

const navigationClassName = cn('navigation-item', {
  'navigation-item--active': isActive,
  'navigation-item--disabled': isDisabled,
});
// "navigation-item navigation-item--active"
`})}),`
`,(0,l.jsx)(n.h2,{id:`combine-strings-and-class-maps`,children:`Combine strings and class maps`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`const sizeClassName = cn('card', { 'card--compact': true }, 'card--interactive');
// "card card--compact card--interactive"
`})}),`
`,(0,l.jsx)(n.h2,{id:`ignore-unsupported-values`,children:`Ignore unsupported values`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`const className = cn('button', false, null, ['not-added'], { expanded: 1 });
// "button"
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};