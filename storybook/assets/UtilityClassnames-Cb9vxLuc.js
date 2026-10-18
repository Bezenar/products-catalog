import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Dd0WZM8c.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-DwPgavJ2.js";function s(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Utility class names`}),`
`,(0,l.jsx)(i,{children:`Project Internal Scripts`}),`
`,(0,l.jsx)(n.h1,{id:`table-of-contents`,children:`Table of contents`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#spacing-step`,children:`Spacing step`})}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`#flex`,children:`Flex`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`#additional-flex-classnames`,children:`Additional flex classnames`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#flex-direction`,children:`flex direction`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#justify-content`,children:`justify content`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#align-items`,children:`align items`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#align-content`,children:`align content`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#align-self`,children:`align self`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#grow`,children:`grow`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#shrink`,children:`shrink`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#gap`,children:`gap`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#widths`,children:`Widths`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#margin--padding`,children:`Margin & Padding`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#colors`,children:`Colors`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`#fonts`,children:`Fonts`})}),`
`]}),`
`,(0,l.jsx)(n.h1,{id:`spacing-step`,children:`Spacing step`}),`
`,(0,l.jsxs)(n.p,{children:[`Currently are declared `,(0,l.jsx)(n.strong,{children:`4px`}),`.`]}),`
`,(0,l.jsxs)(n.p,{children:[`Step variable are stored at `,(0,l.jsx)(n.strong,{children:`src/lib/assets/styles/variables.scss`}),` as `,(0,l.jsx)(n.strong,{children:`§stepValue`}),`. If appear needs
to change step value, it should be changed there.`]}),`
`,(0,l.jsxs)(n.p,{children:[`Step value will be applied for spacing like margin, padding, gap in flex elements. Any spacing
classname have number, as example `,(0,l.jsx)(n.em,{children:`ma-1`}),`, `,(0,l.jsx)(n.em,{children:`pa-1`}),`, `,(0,l.jsx)(n.em,{children:`gap-1`}),`. This number will be applied as number which
multiply step value, as example: *`,(0,l.jsx)(n.em,{children:`<spacing-classname>-3`}),`3= 3 * 4px = 12px;`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-diff`,children:`- Currently max number in spacing classname are 10.
`})}),`
`,(0,l.jsx)(n.h1,{id:`flex`,children:`Flex`}),`
`,(0,l.jsxs)(n.p,{children:[`Main classname to create flex element `,(0,l.jsx)(n.strong,{children:`flex`}),`.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex"></div>
`})}),`
`,(0,l.jsxs)(n.p,{children:[`This classname have nested classnames, let's name it as additional flex classnames. This additional classnames will work only if `,(0,l.jsx)(n.strong,{children:`flex`}),` classname is provided.`]}),`
`,(0,l.jsx)(n.h2,{id:`additional-flex-classnames`,children:`Additional flex classnames`}),`
`,(0,l.jsx)(n.h3,{id:`flex-direction`,children:`flex direction`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`dir-row`}),` - `,(0,l.jsx)(n.em,{children:`flex-direction: row;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`dir-row-rev`}),` - `,(0,l.jsx)(n.em,{children:`flex-direction: row-reverse;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`dir-col`}),` - `,(0,l.jsx)(n.em,{children:`flex-direction: column;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`dir-col-rev`}),` - `,(0,l.jsx)(n.em,{children:`flex-direction: column-reverse;`}),`,`]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex dir-row">< /div>
<div class="flex dir-row-rev"></div>
<div class="flex dir-col"></div>
<div class="flex dir-col-tev"></div>
`})}),`
`,(0,l.jsx)(n.h3,{id:`justify-content`,children:`justify content`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`jc-start`}),` - `,(0,l.jsx)(n.em,{children:`justify-content: flex-start;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`jc-end`}),` - `,(0,l.jsx)(n.em,{children:`justify-content: flex-end;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`jc-center`}),` - `,(0,l.jsx)(n.em,{children:`justify-content: center;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`jc-sb`}),` - `,(0,l.jsx)(n.em,{children:`justify-content: space-between;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`jc-se`}),` - `,(0,l.jsx)(n.em,{children:`justify-content: space-evenly;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`jc-sa`}),` - `,(0,l.jsx)(n.em,{children:`justify-content: space-around;`})]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex jc-start"></div>
<div class="flex jc-end"></div>
<div class="flex jc-center"></div>
<div class="flex jc-sb"></div>
<div class="flex jc-se"></div>
<div class="flex jc-sa"></div>
`})}),`
`,(0,l.jsx)(n.h3,{id:`align-items`,children:`align items`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ai-start`}),` - `,(0,l.jsx)(n.em,{children:`align-items: flex-start;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ai-end`}),` - `,(0,l.jsx)(n.em,{children:`align-items: flex-end;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ai-center`}),` - `,(0,l.jsx)(n.em,{children:`align-items: center;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ai-stretch`}),` - `,(0,l.jsx)(n.em,{children:`align-items: stretch;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ai-baseline`}),` - `,(0,l.jsx)(n.em,{children:`align-items: baseline;`})]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex ai-start"></div>
<div class="flex ai-end"></div>
<div class="flex ai-center"></div>
<div class="flex ai-stretch"></div>
<div class="flex ai-baseline"></div>
`})}),`
`,(0,l.jsx)(n.h3,{id:`align-content`,children:`align content`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ac-start`}),` - `,(0,l.jsx)(n.em,{children:`align-content: flex-start;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ac-end`}),` - `,(0,l.jsx)(n.em,{children:`align-content: flex-end;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ac-center`}),` - `,(0,l.jsx)(n.em,{children:`align-content: center;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ac-stretch`}),` - `,(0,l.jsx)(n.em,{children:`align-content: stretch;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ac-sb`}),` - `,(0,l.jsx)(n.em,{children:`align-content: space-between;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ac-se`}),` - `,(0,l.jsx)(n.em,{children:`align-content: space-evenly;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`ac-sa`}),` - `,(0,l.jsx)(n.em,{children:`align-content: space-around;`})]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex ac-start"></div>
<div class="flex ac-end"></div>
<div class="flex ac-center"></div>
<div class="flex ac-stretch"></div>
<div class="flex ac-sb"></div>
<div class="flex ac-se"></div>
<div class="flex ac-sa"></div>
`})}),`
`,(0,l.jsx)(n.h3,{id:`align-self`,children:`align self`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`as-start`}),` - `,(0,l.jsx)(n.em,{children:`align-self: flex-start;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`as-end`}),` - `,(0,l.jsx)(n.em,{children:`align-self: flex-end;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`as-center`}),` - `,(0,l.jsx)(n.em,{children:`align-self: center;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`as-stretch`}),` - `,(0,l.jsx)(n.em,{children:`align-self: stretch;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`as-baseline`}),` - `,(0,l.jsx)(n.em,{children:`align-self: baseline;`})]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex as-start"></div>
<div class="flex as-end"></div>
<div class="flex as-center"></div>
<div class="flex as-stretch"></div>
<div class="flex as-baseline"></div>
`})}),`
`,(0,l.jsx)(n.h3,{id:`grow`,children:`grow`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`grow-<number>`}),` - `,(0,l.jsx)(n.em,{children:`grow: <number>`})]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex">
    <div class="grow-1"
</div>
`})}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-diff`,children:`- currently supported number range are 1 - 5.
`})}),`
`,(0,l.jsx)(n.h3,{id:`shrink`,children:`shrink`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`shrink-<number>`}),` - `,(0,l.jsx)(n.em,{children:`grow: <number>`})]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex">
    <div class="shrink-1"
</div>
`})}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-diff`,children:`- currently supported number range are 1 - 5.
`})}),`
`,(0,l.jsx)(n.h3,{id:`gap`,children:`gap`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`gap-<number>`}),` - `,(0,l.jsx)(n.em,{children:`gap: <number> * spacing-step;`})]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="flex gap-2"></div>
`})}),`
`,(0,l.jsx)(n.h1,{id:`widths`,children:`Widths`}),`
`,(0,l.jsx)(n.p,{children:`Classname structure`}),`
`,(0,l.jsxs)(n.blockquote,{children:[`
`,(0,l.jsx)(n.p,{children:`wid-<size>`}),`
`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`wid-25`}),` - `,(0,l.jsx)(n.em,{children:`width: 25%;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`wid-33`}),` - `,(0,l.jsx)(n.em,{children:`width: 33.33%;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`wid-50`}),` - `,(0,l.jsx)(n.em,{children:`width: 50%;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`wid-66`}),` - `,(0,l.jsx)(n.em,{children:`width: 66.66%;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`wid-75`}),` - `,(0,l.jsx)(n.em,{children:`width: 75%;`})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`wid-100`}),` - `,(0,l.jsx)(n.em,{children:`width: 100%;`})]}),`
`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="wid-50"></div>
`})}),`
`,(0,l.jsx)(n.h1,{id:`margin--padding`,children:`Margin & Padding`}),`
`,(0,l.jsx)(n.p,{children:`Classname structure`}),`
`,(0,l.jsxs)(n.blockquote,{children:[`
`,(0,l.jsx)(n.p,{children:`<spacing><direction>-<steps>`}),`
`]}),`
`,(0,l.jsx)(n.p,{children:`** <spacing> ** available values`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`m`}),` - for margins`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`p`}),` - for paddings`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:`** <direction> ** available values`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`t`}),` - top side`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`b`}),` - bottom side`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`l`}),` - left side`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`r`}),` - right side`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`x`}),` - left and right side`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`y`}),` - top and bottom side`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`a`}),` - all sides`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:`** <steps> ** available values in range 1 - 10.`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-HTML`,children:`<div class="mr-1"></div> <!-- margin-right: 4px; -->
<div class="mx-2"></div> <!-- margin-right: 8px; margin-left: 8px; -->
<div class="pa-3"></div> <!-- padding: 12px; -->
<div class="mt-1 ml-3 mr-4"></div> <!-- margin-top: 4px; margin-left: 12px; margin-right: 16px; -->
<div class="ma-2 pa-2"></div> <!-- margin: 8px; padding: 8px -->
`})}),`
`,(0,l.jsx)(n.h1,{id:`colors`,children:`Colors`}),`
`,(0,l.jsxs)(n.p,{children:[`Color utilities apply CSS custom properties declared in `,(0,l.jsx)(n.code,{children:`tokens.module.scss`}),`. Load the token stylesheet and utility stylesheet in the application entry point before using these classes:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import 'lib/tokens.scss';
import 'lib/assets/styles/index.scss';
`})}),`
`,(0,l.jsx)(n.h2,{id:`color-palette`,children:`Color palette`}),`
`,(0,l.jsxs)(n.p,{children:[`These swatches use the CSS custom properties from `,(0,l.jsx)(n.code,{children:`tokens.module.scss`}),`.
The same values are available as global CSS variables, so they can be used directly in component styles with the `,(0,l.jsx)(n.code,{children:`var()`}),` function.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-css`,children:`.callout {
  color: var(--text-primary);
  background-color: var(--surface-subtle);
  border: 1px solid var(--border-default);
}
`})}),`
`,(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, minmax(0, 1fr))`,gap:`12px`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--brand-primary)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--brand-primary`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--brand-primary-active)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--brand-primary-active`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--surface-canvas)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--surface-canvas`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--surface-subtle)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--surface-subtle`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--surface-muted)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--surface-muted`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--surface-search)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--surface-search`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--surface-overlay)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--surface-overlay`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--border-default)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--border-default`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--border-control)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--border-control`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--text-primary)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--text-primary`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--text-secondary)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--text-secondary`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--text-tertiary)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--text-tertiary`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--text-strong)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--text-strong`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--text-muted)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--text-muted`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--text-placeholder)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--text-placeholder`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--icon-default)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--icon-default`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--icon-strong)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--icon-strong`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--neutral-black)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--neutral-black`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--action-destructive)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--action-destructive`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{"aria-hidden":`true`,style:{display:`block`,height:`64px`,backgroundColor:`var(--action-destructive-muted)`,border:`1px solid var(--border-control)`,borderRadius:`4px`}}),(0,l.jsx)(`code`,{children:`--action-destructive-muted`})]})]}),`
`,(0,l.jsx)(n.h2,{id:`text-colors`,children:`Text colors`}),`
`,(0,l.jsxs)(n.p,{children:[`Each class sets the `,(0,l.jsx)(n.code,{children:`color`}),` property.`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Class`}),(0,l.jsx)(`th`,{children:`CSS variable`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--primary`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--text-primary`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--secondary`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--text-secondary`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--tertiary`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--text-tertiary`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--strong`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--text-strong`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--muted`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--text-muted`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--placeholder`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--text-placeholder`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--brand-primary`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--brand-primary`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--brand-primary-active`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--brand-primary-active`})})]})]})]}),`
`,(0,l.jsx)(n.h2,{id:`background-colors`,children:`Background colors`}),`
`,(0,l.jsxs)(n.p,{children:[`Each class sets the `,(0,l.jsx)(n.code,{children:`background-color`}),` property.`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Class`}),(0,l.jsx)(`th`,{children:`CSS variable`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`bg--canvas`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--surface-canvas`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`bg--subtle`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--surface-subtle`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`bg--muted`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--surface-muted`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`bg--search`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--surface-search`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`bg--overlay`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--surface-overlay`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`bg--brand-primary`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--brand-primary`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`bg--brand-primary-active`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--brand-primary-active`})})]})]})]}),`
`,(0,l.jsx)(n.h2,{id:`border-colors`,children:`Border colors`}),`
`,(0,l.jsxs)(n.p,{children:[`Each class sets only `,(0,l.jsx)(n.code,{children:`border-color`}),`; add a border width and style separately.`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Class`}),(0,l.jsx)(`th`,{children:`CSS variable`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`border--default`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--border-default`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`border--control`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--border-control`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`border--brand-primary`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--brand-primary`})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`border--brand-primary-active`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`--brand-primary-active`})})]})]})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<h2 class="text--primary">Primary text</h2>
<p class="text--secondary">Supporting text</p>

<section class="bg--subtle">Subtle surface</section>

<button class="bg--brand-primary text--brand-primary-active">Action</button>

<input class="border--control" style="border: 1px solid" />
`})}),`
`,(0,l.jsx)(n.h1,{id:`fonts`,children:`Fonts`}),`
`,(0,l.jsxs)(n.p,{children:[`The font utilities are loaded by `,(0,l.jsx)(n.code,{children:`assets/styles/utilities/fonts.scss`}),`. They set the Lato font family with `,(0,l.jsx)(n.code,{children:`Arial`}),` and `,(0,l.jsx)(n.code,{children:`sans-serif`}),` fallbacks. Lato is requested from Google Fonts, so the web font requires network access; the fallback stack is used if it cannot load.`]}),`
`,(0,l.jsx)(n.h2,{id:`font-family`,children:`Font family`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`.ff`}),` applies `,(0,l.jsx)(n.code,{children:`"Lato", Arial, sans-serif`}),`.`]}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`font-size`,children:`Font size`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.ts--*`}),` classes set font size:`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Class`}),(0,l.jsx)(`th`,{children:`Font size`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ts--xxl`})}),(0,l.jsx)(`td`,{children:`36px`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ts--xl`})}),(0,l.jsx)(`td`,{children:`20px`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ts--md`})}),(0,l.jsx)(`td`,{children:`14px`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ts--sm`})}),(0,l.jsx)(`td`,{children:`12px`})]})]})]}),`
`,(0,l.jsx)(n.h2,{id:`line-height`,children:`Line height`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.ln--*`}),` classes set line height:`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Class`}),(0,l.jsx)(`th`,{children:`Line height`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ln--xxl`})}),(0,l.jsx)(`td`,{children:`48px`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ln--xl`})}),(0,l.jsx)(`td`,{children:`28px`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ln--md`})}),(0,l.jsx)(`td`,{children:`20px`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ln--sm`})}),(0,l.jsx)(`td`,{children:`16px`})]})]})]}),`
`,(0,l.jsx)(n.h2,{id:`font-weight`,children:`Font weight`}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`.fw--*`}),` classes set the numeric `,(0,l.jsx)(n.code,{children:`font-weight`}),`. Supported values are `,(0,l.jsx)(n.code,{children:`100`}),`, `,(0,l.jsx)(n.code,{children:`300`}),`, `,(0,l.jsx)(n.code,{children:`400`}),`, `,(0,l.jsx)(n.code,{children:`700`}),`, and `,(0,l.jsx)(n.code,{children:`900`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`text-presets`,children:`Text presets`}),`
`,(0,l.jsxs)(n.p,{children:[`Each `,(0,l.jsx)(n.code,{children:`.text--*`}),` class combines the Lato font family, font size, line height, and weight:`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Class`}),(0,l.jsx)(`th`,{children:`Size`}),(0,l.jsx)(`th`,{children:`Line height`}),(0,l.jsx)(`th`,{children:`Weight`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--sm`})}),(0,l.jsx)(`td`,{children:`12px`}),(0,l.jsx)(`td`,{children:`16px`}),(0,l.jsx)(`td`,{children:`500`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--md`})}),(0,l.jsx)(`td`,{children:`14px`}),(0,l.jsx)(`td`,{children:`20px`}),(0,l.jsx)(`td`,{children:`500`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--xl`})}),(0,l.jsx)(`td`,{children:`20px`}),(0,l.jsx)(`td`,{children:`28px`}),(0,l.jsx)(`td`,{children:`700`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`text--xxl`})}),(0,l.jsx)(`td`,{children:`36px`}),(0,l.jsx)(`td`,{children:`48px`}),(0,l.jsx)(`td`,{children:`700`})]})]})]}),`
`,(0,l.jsx)(n.h2,{id:`examples-1`,children:`Examples`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<p class="ff ts--md ln--md fw--400">Custom typography</p>
<h1 class="text--xxl">Page title</h1>
<p class="text--sm">Compact supporting text</p>
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};