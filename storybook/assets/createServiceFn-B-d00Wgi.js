import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bz3bErIl.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,s as o}from"./blocks-5N3tTDpN.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Utilities/createServiceFn`}),`
`,(0,l.jsx)(i,{children:`createServiceFn`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`createServiceFn`}),` wraps a function in a service runner. It forwards the function's arguments, awaits its result, and reports success or failure through callbacks. The wrapper infers argument and result types from the function you pass in.`]}),`
`,(0,l.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`createServiceFn<Args extends unknown[], Result>(
	fn: (...args: Args) => Result,
): (
	args: Args,
	options: T_ServiceOptions<Awaited<Result>, Adapted>,
) => Promise<void>
`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:`fn`})}),` accepts any function whose parameters are captured as the tuple `,(0,l.jsx)(n.code,{children:`Args`}),`. It may return a value directly or a `,(0,l.jsx)(n.code,{children:`Promise`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:`args`})}),` is a tuple matching the parameters of `,(0,l.jsx)(n.code,{children:`fn`}),`, in order. For a function `,(0,l.jsx)(n.code,{children:`(id: number, includeDetails: boolean) => ...`}),`, pass `,(0,l.jsx)(n.code,{children:`[7, true]`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:`options`})}),` requires `,(0,l.jsx)(n.code,{children:`onSuccess`}),` and `,(0,l.jsx)(n.code,{children:`onError`}),`. `,(0,l.jsx)(n.code,{children:`adapter`}),`, `,(0,l.jsx)(n.code,{children:`onBeforeRequest`}),`, and `,(0,l.jsx)(n.code,{children:`onComplete`}),` are optional.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:`Result`})}),` is the function's return type. `,(0,l.jsx)(n.code,{children:`Awaited<Result>`}),` is the resolved value used by the callbacks.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:`Adapted`})}),` is inferred from the adapter's return type when an adapter is provided. Without an adapter, `,(0,l.jsx)(n.code,{children:`onSuccess`}),` receives the original resolved result.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Return value:`}),` the runner returns `,(0,l.jsx)(n.code,{children:`Promise<void>`}),`; the result is delivered to `,(0,l.jsx)(n.code,{children:`onSuccess`}),`, not returned from the promise.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[`The lifecycle is `,(0,l.jsx)(n.code,{children:`onBeforeRequest`}),` → function call → `,(0,l.jsx)(n.code,{children:`onSuccess`}),` or `,(0,l.jsx)(n.code,{children:`onError`}),` → `,(0,l.jsx)(n.code,{children:`onComplete`}),`. A rejected function call is passed to `,(0,l.jsx)(n.code,{children:`onError`}),` and is not rethrown by the runner.`]}),`
`,(0,l.jsx)(n.h2,{id:`pass-through-a-result`,children:`Pass through a result`}),`
`,(0,l.jsx)(n.p,{children:`Use this when the consumer needs the full resolved response. The callback parameters are inferred from the wrapped function:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import { createServiceFn } from 'lib';

type Product = {
  id: number;
  name: string;
};

const fetchProduct = async (id: number): Promise<Product> => ({
  id,
  name: 'Gateway',
});

const getProduct = createServiceFn(fetchProduct);

await getProduct([7], {
  onSuccess: (product) => {
    // product is inferred as Product
    console.log(product.name);
  },
  onError: (error) => {
    console.error(error);
  },
});
`})}),`
`,(0,l.jsx)(n.h2,{id:`adapt-a-result`,children:`Adapt a result`}),`
`,(0,l.jsxs)(n.p,{children:[`An adapter transforms the resolved value before `,(0,l.jsx)(n.code,{children:`onSuccess`}),`. The success callback is inferred from the adapter's return type:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`const getProductName = createServiceFn(fetchProduct);

await getProductName([7], {
  adapter: (product) => product.name,
  onSuccess: (name) => {
    // name is inferred as string
    console.log(name.toUpperCase());
  },
  onError: (error) => {
    console.error(error);
  },
});
`})}),`
`,(0,l.jsx)(n.h2,{id:`wrap-a-synchronous-function`,children:`Wrap a synchronous function`}),`
`,(0,l.jsxs)(n.p,{children:[`Synchronous return values are also supported. The runner still returns a promise and sends the value to `,(0,l.jsx)(n.code,{children:`onSuccess`}),`:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`const double = createServiceFn((value: number) => value * 2);

await double([21], {
  onSuccess: (result) => {
    // result is inferred as number
    console.log(result);
  },
  onError: (error) => {
    console.error(error);
  },
});
`})}),`
`,(0,l.jsx)(n.h2,{id:`lifecycle-callbacks`,children:`Lifecycle callbacks`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`await getProduct([7], {
  onBeforeRequest: () => console.log('Loading'),
  onSuccess: (product) => console.log(product),
  onError: (error) => console.error(error),
  onComplete: () => console.log('Finished'),
});
`})}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`onError`}),` receives `,(0,l.jsx)(n.code,{children:`unknown`}),`, so narrow or inspect the error before using error-specific properties. `,(0,l.jsx)(n.code,{children:`onBeforeRequest`}),` and `,(0,l.jsx)(n.code,{children:`onComplete`}),` are optional.`]}),`
`,(0,l.jsx)(n.h1,{id:`createservicefn`,children:`createServiceFn`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),n(),a()})))()}u();export{c as default};