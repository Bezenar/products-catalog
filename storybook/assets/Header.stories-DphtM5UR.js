import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./IconButton-DYVi3pbc.js";import{n as i,t as a}from"./LogoButton-Dh_UeIdx.js";var o,s;function c(){return(c=e((()=>{n(),i(),o=t(),s=({title:e,author:t,onLogoClick:n,logoAriaLabel:i})=>(0,o.jsxs)(`header`,{className:`flex ai-center jc-sb bg--muted pa-1`,children:[(0,o.jsxs)(`div`,{className:`flex ai-center gap-3`,children:[(0,o.jsx)(a,{ariaLabel:i,onClick:n}),(0,o.jsx)(`h1`,{className:`text--md text--muted`,children:e})]}),(0,o.jsxs)(`div`,{className:`flex ai-center gap-2`,children:[(0,o.jsx)(`h2`,{className:`text--md text--muted`,children:t}),(0,o.jsx)(r,{ariaLabel:`Visit storybook`,onClick:()=>window.open(`/storybook/index.html`,`_blank`),children:(0,o.jsxs)(`svg`,{fill:`none`,height:`20`,width:`16`,viewBox:`0 0 16 20`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,o.jsx)(`path`,{d:`M0.620279 18.4293L0.000720095 1.92089C-0.0197415 1.37568 0.398305 0.913625 0.942836 0.879592L14.9844 0.00199235C15.5387 -0.0326493 16.0161 0.38859 16.0507 0.942857C16.052 0.96374 16.0527 0.984658 16.0527 1.00558V18.9945C16.0527 19.5498 15.6025 20 15.0471 20C15.0321 20 15.0171 19.9997 15.002 19.999L1.58 19.3962C1.05727 19.3727 0.639903 18.9522 0.620279 18.4293Z`,fill:`#FF4785`}),(0,o.jsx)(`path`,{"clip-rule":`evenodd`,d:`M13.8804 0.0710449L11.9479 0.191825L11.8536 2.45837C11.8522 2.49321 11.8629 2.52747 11.884 2.55526C11.9341 2.62126 12.0282 2.63418 12.0942 2.58411L12.9746 1.91625L13.7182 2.50205C13.7461 2.524 13.7808 2.53536 13.8163 2.53413C13.8991 2.53124 13.9639 2.46178 13.961 2.37898L13.8804 0.0710449ZM12.3763 7.66099C12.0225 7.93579 9.38733 8.12329 9.38733 7.73208C9.44302 6.23927 8.77469 6.17383 8.40339 6.17383C8.05066 6.17383 7.45659 6.28046 7.45659 7.08017C7.45659 7.89512 8.32476 8.35519 9.34377 8.8952C10.7914 9.66232 12.5433 10.5908 12.5433 12.927C12.5433 15.1662 10.724 16.4031 8.40339 16.4031C6.00853 16.4031 3.91569 15.4342 4.15205 12.075C4.24488 11.6806 7.2895 11.7743 7.2895 12.075C7.25237 13.4612 7.56798 13.8689 8.36626 13.8689C8.9789 13.8689 9.25737 13.5312 9.25737 12.9625C9.25737 12.1019 8.35281 11.594 7.31222 11.0098C5.90324 10.2187 4.24488 9.28767 4.24488 7.15126C4.24488 5.01868 5.7115 3.59696 8.32913 3.59696C10.9468 3.59696 12.3763 4.9969 12.3763 7.66099Z`,fill:`white`,"fill-rule":`evenodd`})]})})]})]}),s.__docgenInfo={description:``,methods:[],displayName:`Header`}})))()}var l,u,d,f,p;function m(){return(m=e((()=>{c(),{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Molecules/Header`,component:s,argTypes:{title:{control:`text`,description:`Primary page title displayed in the header.`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},author:{control:`text`,description:`Author or attribution displayed at the end of the header.`,type:{name:`other`,value:`React.ReactNode`,required:!0},table:{type:{summary:`React.ReactNode`}}},logoAriaLabel:{control:`text`,description:`Accessible name for the logo button.`,type:{name:`string`,required:!0},table:{type:{summary:`string`}}},onLogoClick:{action:`logo clicked`,control:!1,description:`Called when the logo button is clicked.`,type:{name:`function`,required:!0},table:{type:{summary:`() => void`}}}}},f={args:{title:`Product catalog`,author:`Ubiquiti`,logoAriaLabel:`Go to home`,onLogoClick:u()},play:async({args:e,canvas:t,userEvent:n,step:r})=>{await r(`Should render title`,async()=>{l(t.getByText(e.title)).toBeInTheDocument()}),await r(`Should render author`,async()=>{l(t.getByText(e.author)).toBeInTheDocument()}),await r(`Should render logo button`,async()=>{l(t.getByRole(`button`,{name:e.logoAriaLabel})).toBeInTheDocument()}),await r(`Should expose and handle the logo button`,async()=>{await n.click(t.getByRole(`button`,{name:e.logoAriaLabel})),l(e.onLogoClick).toHaveBeenCalledOnce()})}},p=[`Default`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Product catalog',
    author: 'Ubiquiti',
    logoAriaLabel: 'Go to home',
    onLogoClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent,
    step
  }) => {
    await step('Should render title', async () => {
      expect(canvas.getByText(args.title)).toBeInTheDocument();
    });
    await step('Should render author', async () => {
      expect(canvas.getByText(args.author as string)).toBeInTheDocument();
    });
    await step('Should render logo button', async () => {
      expect(canvas.getByRole('button', {
        name: args.logoAriaLabel
      })).toBeInTheDocument();
    });
    await step('Should expose and handle the logo button', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.logoAriaLabel
      }));
      expect(args.onLogoClick).toHaveBeenCalledOnce();
    });
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Default,p as __namedExportsOrder,d as default};