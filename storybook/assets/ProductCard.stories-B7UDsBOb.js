import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-B2bYK1_D.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./cn-SWPk7jUc.js";import{n as a,t as o}from"./Badge-CBsjr9TM.js";import{n as s,t as c}from"./Content-GxNDosGR.js";import{n as l,t as u}from"./Heading-BcNIdF1y.js";import{n as d,t as f}from"./Image-D2IqBdnw.js";import{n as p,t as m}from"./SecondaryText-BKxuXZlh.js";var h,g,_;function v(){return(v=e((()=>{h=`_card_6f1cm_1`,g=`_clickable_6f1cm_9`,_={card:h,clickable:g}})))()}var y,b;function x(){return(x=e((()=>{y=t(),r(),a(),s(),l(),d(),p(),v(),b=({children:e,onClick:t})=>{let n=typeof t==`function`;return(0,y.createElement)(n?`button`:`div`,{className:i(_.card,{[_.clickable]:n}),onClick:n?t:void 0},e)},b.Image=f,b.Heading=u,b.Content=c,b.SecondaryText=m,b.Badge=o,b.displayName=`ProductCard`,b.__docgenInfo={description:``,methods:[{name:`Image`,docblock:null,modifiers:[`static`],params:[{name:`{ src, alt }`,optional:!1,type:null}],returns:null},{name:`Heading`,docblock:null,modifiers:[`static`],params:[{name:`{ children }`,optional:!1,type:null}],returns:null},{name:`Content`,docblock:null,modifiers:[`static`],params:[{name:`{ children }`,optional:!1,type:null}],returns:null},{name:`SecondaryText`,docblock:null,modifiers:[`static`],params:[{name:`{ children }`,optional:!1,type:null}],returns:null},{name:`Badge`,docblock:null,modifiers:[`static`],params:[{name:`{ value }`,optional:!1,type:null}],returns:null}],displayName:`ProductCard`}})))()}var S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{x(),S=n(),{expect:C,fn:w}=__STORYBOOK_MODULE_TEST__,T=w(),E={title:`Components/Organisms/ProductCard`,component:b,beforeEach:()=>T.mockClear(),parameters:{docs:{description:{component:`A compound product card with optional native-button behavior. See the Usage page for API and accessibility guidance.`}}},argTypes:{children:{control:!1,description:`Card content, typically composed from the ProductCard compounds.`,type:{name:`other`,value:``,required:!0},table:{type:{summary:`React.ReactNode`}}},onClick:{action:`product selected`,control:!1,description:`Optional. When provided, the card renders as a native button.`,type:{name:`function`,required:!1},table:{type:{summary:`(() => void) | undefined`}}}}},D={args:{onClick:void 0,children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(b.Badge,{value:`New`}),(0,S.jsx)(b.Image,{src:`https://images.unsplash.com/photo-1518770660439-4636190af475?w=320`,alt:``}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Heading,{children:`Dream Router`}),(0,S.jsx)(b.SecondaryText,{children:`UDR`})]})]})},play:async({canvas:e,step:t})=>{await t(`Renders the product name`,async()=>{C(e.getByRole(`heading`,{level:4,name:`Dream Router`})).toBeInTheDocument()}),await t(`Is not interactive without onClick`,async()=>{C(e.queryByRole(`button`)).not.toBeInTheDocument()})}},O={args:{onClick:T,children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(b.Badge,{value:`Popular`}),(0,S.jsx)(b.Image,{src:`https://images.unsplash.com/photo-1518770660439-4636190af475?w=320`,alt:``}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Heading,{children:`Dream Router`}),(0,S.jsx)(b.SecondaryText,{children:`UDR`})]})]})},play:async({args:e,canvas:t,step:n,userEvent:r})=>{await n(`Renders as a button named by its content`,async()=>{C(t.getByRole(`button`,{name:/Dream Router/})).toBeInTheDocument()}),await n(`Invokes onClick when activated`,async()=>{await r.click(t.getByRole(`button`,{name:/Dream Router/})),C(e.onClick).toHaveBeenCalledOnce()})}},k=[`DisplayOnly`,`Clickable`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: undefined,
    children: <>
        <ProductCard.Badge value="New" />
        <ProductCard.Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=320" alt="" />
        <ProductCard.Content>
          <ProductCard.Heading>Dream Router</ProductCard.Heading>
          <ProductCard.SecondaryText>UDR</ProductCard.SecondaryText>
        </ProductCard.Content>
      </>
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders the product name', async () => {
      expect(canvas.getByRole('heading', {
        level: 4,
        name: 'Dream Router'
      })).toBeInTheDocument();
    });
    await step('Is not interactive without onClick', async () => {
      expect(canvas.queryByRole('button')).not.toBeInTheDocument();
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    onClick,
    children: <>
        <ProductCard.Badge value="Popular" />
        <ProductCard.Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=320" alt="" />
        <ProductCard.Content>
          <ProductCard.Heading>Dream Router</ProductCard.Heading>
          <ProductCard.SecondaryText>UDR</ProductCard.SecondaryText>
        </ProductCard.Content>
      </>
  },
  play: async ({
    args,
    canvas,
    step,
    userEvent
  }) => {
    await step('Renders as a button named by its content', async () => {
      expect(canvas.getByRole('button', {
        name: /Dream Router/
      })).toBeInTheDocument();
    });
    await step('Invokes onClick when activated', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /Dream Router/
      }));
      expect(args.onClick).toHaveBeenCalledOnce();
    });
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{O as Clickable,D as DisplayOnly,k as __namedExportsOrder,E as default};