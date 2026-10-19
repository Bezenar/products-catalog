import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-dRbXQuge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-lUWAOZS_.js";function s(e){let n={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Introduction`}),`
`,(0,l.jsx)(i,{children:`UI Library`}),`
`,(0,l.jsxs)(n.p,{children:[`This package contains shared React components, hooks, icons, styles, and utilities used by the
application. Components are grouped into `,(0,l.jsx)(n.strong,{children:`atoms`}),` for focused controls, `,(0,l.jsx)(n.strong,{children:`molecules`}),` for composed
interface patterns, and `,(0,l.jsx)(n.strong,{children:`organisms`}),` for larger interface components. The Storybook sidebar
contains interactive examples and API details.`]}),`
`,(0,l.jsx)(n.h2,{id:`getting-started`,children:`Getting started`}),`
`,(0,l.jsx)(n.p,{children:`Import components from their package subpaths:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import Checkbox from 'lib/atoms/Checkbox';
import Search from 'lib/molecules/Search';

function CategoryOption() {
  return <Checkbox label="Network" isChecked={false} onChange={() => {}} />;
}
`})}),`
`,(0,l.jsx)(n.p,{children:`Import the shared stylesheet once from the application entry point to load global tokens and
utility classes:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import 'lib/assets/styles/index.scss';
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The package uses subpath exports rather than a single root barrel. Available import groups are
`,(0,l.jsx)(n.code,{children:`lib/atoms/*`}),`, `,(0,l.jsx)(n.code,{children:`lib/molecules/*`}),`, `,(0,l.jsx)(n.code,{children:`lib/organisms/*`}),`, `,(0,l.jsx)(n.code,{children:`lib/hooks/*`}),`, `,(0,l.jsx)(n.code,{children:`lib/icons/*`}),`, `,(0,l.jsx)(n.code,{children:`lib/utils/*`}),`, and
`,(0,l.jsx)(n.code,{children:`lib/utilityTypes`}),`. Global styles are available at `,(0,l.jsx)(n.code,{children:`lib/assets/styles/index.scss`}),`; CSS module tokens
are available at `,(0,l.jsx)(n.code,{children:`lib/tokens.module.scss`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`components`,children:`Components`}),`
`,(0,l.jsx)(n.h3,{id:`atoms`,children:`Atoms`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Checkbox`}),`: labeled binary input.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`FilterButton`}),`: button used to open category filters.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`GhostButton`}),`: low-emphasis action button.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`IconButton`}),`: icon-only button with an accessible label.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`List`}),`: keyed list rendered from items and a render callback.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Logo`}),` and `,(0,l.jsx)(n.strong,{children:`LogoButton`}),`: brand mark and navigable logo control.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Popover`}),`: positioned content associated with an anchor.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`SearchListItem`}),`: selectable primary/secondary text row.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Spinner`}),`: loading indicator with an accessible status label.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`TextField`}),`: labeled text input with optional icon and debounced changes.`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`molecules`,children:`Molecules`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`CategoryFilters`}),`: category selection list with an optional heading and reset action.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Header`}),`: application header composition.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Search`}),`: product-name search with matching results.`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`organisms`,children:`Organisms`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ProductCard`}),`: composable product card with image, heading, secondary text, and badge elements.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Table`}),`: data table with composable rows, cells, and an empty state.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[`Browse `,(0,l.jsx)(n.strong,{children:`Components → Atoms`}),`, `,(0,l.jsx)(n.strong,{children:`Components → Molecules`}),`, and `,(0,l.jsx)(n.strong,{children:`Components → Organisms`}),` in the
Storybook sidebar for props, controls, and examples.`]}),`
`,(0,l.jsx)(n.h2,{id:`utilities`,children:`Utilities`}),`
`,(0,l.jsx)(n.p,{children:`Utilities are imported from their individual package subpaths:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import BaseApi from 'lib/utils/BaseApi';
import cn from 'lib/utils/cn';
import { createAppSlice } from 'lib/utils/createAppSlice';
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The package also provides `,(0,l.jsx)(n.code,{children:`createServiceFn`}),` for callback-based async service handling, `,(0,l.jsx)(n.code,{children:`TypeGuard`}),`
for narrowing common JavaScript values, and shared types from `,(0,l.jsx)(n.code,{children:`lib/utilityTypes`}),`.`]}),`
`,(0,l.jsxs)(n.p,{children:[`Open `,(0,l.jsx)(n.strong,{children:`Utilities`}),` in the Storybook sidebar for detailed guides on `,(0,l.jsx)(n.code,{children:`BaseApi`}),`, `,(0,l.jsx)(n.code,{children:`cn`}),`,
`,(0,l.jsx)(n.code,{children:`createAppSlice`}),`, `,(0,l.jsx)(n.code,{children:`createServiceFn`}),`, and `,(0,l.jsx)(n.code,{children:`TypeGuard`}),`. The `,(0,l.jsx)(n.strong,{children:`Iconography`}),` and `,(0,l.jsx)(n.strong,{children:`Utility class names`}),`
pages document the shared icons and CSS utility classes.`]}),`
`,(0,l.jsx)(n.h2,{id:`hooks`,children:`Hooks`}),`
`,(0,l.jsxs)(n.p,{children:[`The public hooks are imported from `,(0,l.jsx)(n.code,{children:`lib/hooks/<hook-name>`}),`:`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`useClickOutside`}),`: calls a callback when a `,(0,l.jsx)(n.code,{children:`mousedown`}),` occurs outside a referenced element.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`useEventListener`}),`: registers an event listener on `,(0,l.jsx)(n.code,{children:`window`}),` or a supplied element and removes it
during cleanup.`]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { useRef } from 'react';
import useClickOutside from 'lib/hooks/useClickOutside';

function Menu({ onDismiss }: { onDismiss: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, onDismiss);

  return <div ref={menuRef}>Menu content</div>;
}
`})}),`
`,(0,l.jsxs)(n.p,{children:[`Open `,(0,l.jsx)(n.strong,{children:`Hooks`}),` in the Storybook sidebar for usage and lifecycle details.`]}),`
`,(0,l.jsx)(n.h2,{id:`icons-and-tokens`,children:`Icons and tokens`}),`
`,(0,l.jsxs)(n.p,{children:[`Icons have individual subpath exports, such as `,(0,l.jsx)(n.code,{children:`lib/icons/SearchIcon`}),`, `,(0,l.jsx)(n.code,{children:`lib/icons/GridIcon`}),`, and
`,(0,l.jsx)(n.code,{children:`lib/icons/ListIcon`}),`. Use `,(0,l.jsx)(n.code,{children:`lib/tokens.module.scss`}),` for the exported Sass token module, and import the
global stylesheet once to make the shared CSS variables and utility classes available.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};