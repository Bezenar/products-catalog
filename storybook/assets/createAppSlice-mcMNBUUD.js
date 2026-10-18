import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Dd0WZM8c.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-DwPgavJ2.js";function s(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Utilities/createAppSlice`}),`
`,(0,l.jsx)(i,{children:`createAppSlice`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`createAppSlice`}),` is the application's configured Redux Toolkit slice factory. Use it to define a
feature's state, synchronous reducers, and `,(0,l.jsx)(n.code,{children:`create.asyncThunk`}),` reducers together in one slice.`]}),`
`,(0,l.jsxs)(n.p,{children:[`Use this helper when a slice needs Redux Toolkit's async-thunk creator inside its reducer callback.
For a simple slice without async thunks, Redux Toolkit's standard `,(0,l.jsx)(n.code,{children:`createSlice`}),` is sufficient.`]}),`
`,(0,l.jsx)(n.h2,{id:`synchronous-reducer`,children:`Synchronous reducer`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import { createAppSlice } from 'lib/utils/createAppSlice';

const counterSlice = createAppSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: (create) => ({
    increment: create.reducer<number>((state, action) => {
      state.value += action.payload;
    }),
  }),
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
`})}),`
`,(0,l.jsx)(n.h2,{id:`async-thunk`,children:`Async thunk`}),`
`,(0,l.jsxs)(n.p,{children:[`Use `,(0,l.jsx)(n.code,{children:`create.asyncThunk`}),` when a feature needs to perform asynchronous work and update its state for
pending, fulfilled, and rejected outcomes:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`const productsSlice = createAppSlice({
  name: 'products',
  initialState: { items: [], isLoading: false, hasError: false },
  reducers: (create) => ({
    loadProducts: create.asyncThunk(async () => fetchProducts(), {
      pending: (state) => {
        state.isLoading = true;
        state.hasError = false;
      },
      fulfilled: (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      },
      rejected: (state) => {
        state.isLoading = false;
        state.hasError = true;
      },
    }),
  }),
});
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The `,(0,l.jsx)(n.code,{children:`createAppSlice`}),` helper is configured with Redux Toolkit's `,(0,l.jsx)(n.code,{children:`asyncThunkCreator`}),`; it does not
implement request behavior itself. Put the async operation in the thunk payload creator and use the
lifecycle reducers to update slice state.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};