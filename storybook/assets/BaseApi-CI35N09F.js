import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bz3bErIl.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{l as i,s as a}from"./blocks-5N3tTDpN.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Utilities/BaseApi`}),`
`,(0,c.jsx)(n.h1,{id:`baseapi`,children:`BaseApi`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`BaseApi`}),` provides a protected `,(0,c.jsx)(n.code,{children:`request`}),` method for subclasses. It sends requests with the Fetch API, parses successful responses as JSON, and throws when the response status is not successful.`]}),`
`,(0,c.jsx)(n.h2,{id:`request-options`,children:`Request options`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path`}),`: URL passed to `,(0,c.jsx)(n.code,{children:`fetch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method`}),`: `,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),`, `,(0,c.jsx)(n.code,{children:`PUT`}),`, or `,(0,c.jsx)(n.code,{children:`DELETE`}),`; defaults to `,(0,c.jsx)(n.code,{children:`GET`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers`}),`: request headers forwarded to `,(0,c.jsx)(n.code,{children:`fetch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`body`}),`: optional value serialized with `,(0,c.jsx)(n.code,{children:`JSON.stringify`}),` when truthy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformResponse`}),`: optional function called with the parsed JSON response. Its return value becomes the resolved request value.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`BaseApi`}),` does not add headers automatically. Set `,(0,c.jsx)(n.code,{children:`Content-Type: application/json`}),` when sending a JSON body if the server expects it.`]}),`
`,(0,c.jsx)(n.h2,{id:`extend-baseapi`,children:`Extend BaseApi`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`request`}),` is protected, so expose application-specific methods from a subclass:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`import { BaseApi } from 'lib';

interface Product {
  id: number;
  name: string;
}

interface CreateProduct {
  name: string;
}

class ProductsApi extends BaseApi {
  getProduct(id: number): Promise<Product> {
    return this.request<Product>({
      path: \`/api/products/\${id}\`,
    });
  }

  createProduct(input: CreateProduct): Promise<Product> {
    return this.request<Product, CreateProduct>({
      path: '/api/products',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: input,
    });
  }

  getProductLabel(id: number): Promise<{ id: number; label: string }> {
    return this.request<Product, unknown, { id: number; label: string }>({
      path: \`/api/products/\${id}\`,
      transformResponse: (product) => ({
        id: product.id,
        label: product.name.toUpperCase(),
      }),
    });
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`When `,(0,c.jsx)(n.code,{children:`transformResponse`}),` is provided, the promise resolves with its return value instead of the raw
JSON. The first generic describes the parsed response; the third generic describes the adapted result.`]}),`
`,(0,c.jsx)(n.h2,{id:`response-and-errors`,children:`Response and errors`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Res`}),` generic describes the value returned by `,(0,c.jsx)(n.code,{children:`response.json()`}),` to TypeScript; it does not validate the response at runtime. For a non-OK response, `,(0,c.jsx)(n.code,{children:`request`}),` throws an error with the status, such as `,(0,c.jsx)(n.code,{children:`Request failed with status 503`}),`. Network errors from `,(0,c.jsx)(n.code,{children:`fetch`}),` and JSON parsing errors are also allowed to propagate.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),n(),i()})))()}l();export{s as default};