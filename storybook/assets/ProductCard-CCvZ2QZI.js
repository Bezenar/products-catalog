import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-dRbXQuge.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-lUWAOZS_.js";function s(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Components/Organisms/ProductCard/Usage`}),`
`,(0,l.jsx)(i,{children:`ProductCard`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`ProductCard`}),` composes a product image, heading, content area, secondary text, and an optional badge. It is a visual container by default. Supplying `,(0,l.jsx)(n.code,{children:`onClick`}),` renders the card as a native button, so it can be activated with a mouse, Enter, or Space.`]}),`
`,(0,l.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import ProductCard from 'lib/organisms/ProductCard';
`})}),`
`,(0,l.jsx)(n.h2,{id:`display-only-card`,children:`Display-only card`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`<ProductCard>
  <ProductCard.Badge value="New" />
  <ProductCard.Image src={imageUrl} alt="" />
  <ProductCard.Content>
    <ProductCard.Heading>Dream Router</ProductCard.Heading>
    <ProductCard.SecondaryText>UDR</ProductCard.SecondaryText>
  </ProductCard.Content>
</ProductCard>
`})}),`
`,(0,l.jsx)(n.h2,{id:`clickable-card`,children:`Clickable card`}),`
`,(0,l.jsxs)(n.p,{children:[`Use `,(0,l.jsx)(n.code,{children:`onClick`}),` for an action, such as opening a details view. The card becomes a button, and its accessible name is derived from its text content.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`<ProductCard onClick={() => openDevice(device.id)}>
  <ProductCard.Badge value="New" />
  <ProductCard.Image src={imageUrl} alt="" />
  <ProductCard.Content>
    <ProductCard.Heading>{device.product.name}</ProductCard.Heading>
    <ProductCard.SecondaryText>{device.shortnames.join(' ')}</ProductCard.SecondaryText>
  </ProductCard.Content>
</ProductCard>
`})}),`
`,(0,l.jsx)(n.p,{children:`Don't put another button, link, input, or other interactive control inside a clickable card. If the entire card represents navigation, prefer a link as the interactive root rather than nesting a link inside the button.`}),`
`,(0,l.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Component`}),(0,l.jsx)(`th`,{children:`Props`}),(0,l.jsx)(`th`,{children:`Purpose`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ProductCard`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(`code`,{children:`children: React.ReactNode`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`code`,{children:`onClick?: () => void`})]}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`Card container. Renders as a button when `,(0,l.jsx)(`code`,{children:`onClick`}),` is supplied.`]})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ProductCard.Badge`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`value: React.ReactNode`})}),(0,l.jsx)(`td`,{children:`Optional label positioned at the card's upper-right corner.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ProductCard.Image`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(`code`,{children:`src: string`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`code`,{children:`alt: string`})]}),(0,l.jsx)(`td`,{children:`Product image with required alternative text.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ProductCard.Content`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`children: React.ReactNode`})}),(0,l.jsx)(`td`,{children:`Layout container for the card's text.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ProductCard.Heading`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`children: React.ReactNode`})}),(0,l.jsx)(`td`,{children:(0,l.jsxs)(n.p,{children:[`Product name rendered as an `,(0,l.jsx)(`code`,{children:`h4`}),`.`]})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ProductCard.SecondaryText`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`children: React.ReactNode`})}),(0,l.jsx)(`td`,{children:`Supporting text rendered as a paragraph.`})]})]})]}),`
`,(0,l.jsxs)(n.p,{children:[`Explore `,(0,l.jsx)(n.strong,{children:`Components → Organisms → ProductCard`}),` for isolated stories of the card and its compounds.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};