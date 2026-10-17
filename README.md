# React + TypeScript + Vite + React Router + Redux

## Project status

The application fetches the public device dataset, adapts incomplete device records, and provides search, product-line filters, and list/grid navigation. The `ProductsList`, `ProductsGrid`, and `Product` route views are currently placeholders; the catalog presentation and product-detail experience are not yet implemented.

## Requirements

- Node.js compatible with Vite 8
- npm
- Network access to `https://static.ui.com/fingerprint/ui/public.json` when running the application

The repository uses npm workspaces. Install dependencies from the repository root; no separate install is needed for `packages/lib`.

## Getting started

```sh
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Commands

| Command                | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `npm run dev`          | Start the Vite development server.                                 |
| `npm run build`        | Type-check the project and create the production build in `dist/`. |
| `npm run preview`      | Preview the production build locally. Run `npm run build` first.   |
| `npm test`             | Run the Vitest test suite once.                                    |
| `npm run test:watch`   | Run Vitest in watch mode with coverage enabled.                    |
| `npm run lint`         | Run ESLint across the repository.                                  |
| `npm run lint:fix`     | Apply automatic ESLint fixes.                                      |
| `npm run format`       | Format repository files with Prettier.                             |
| `npm run format:check` | Check formatting without writing changes.                          |
| `npm run sb`           | Start the component library's Storybook.                           |
| `npm run sb:build`     | Build the component library's Storybook.                           |

## Application structure

```text
src/
  adapters/       Normalize API responses for application state
  api/            API clients
  components/     Application-level shared components
  router/         React Router configuration
  store/          Redux store, slices, and selectors
  views/          Route-level screens
packages/lib/
  src/assets/     Shared icons, styles, and tokens
  src/components/ Reusable atoms and molecules
  src/hooks/      Reusable React hooks
  src/utils/      Shared utilities
  src/documentation/ Storybook documentation pages
```

## Routes and behavior

| Path            | Current behavior                                                                    |
| --------------- | ----------------------------------------------------------------------------------- |
| `/`             | Loads the device catalog and renders the list-view placeholder with shared filters. |
| `/grid-view`    | Renders the grid-view placeholder with shared filters.                              |
| `/product/:id`  | Renders the product-detail placeholder.                                             |
| `/error/:code?` | Displays the error route when catalog loading fails.                                |

`FiltersContainer` requests the catalog on mount and shows a loading indicator while the request is pending. `ProductsApi` fetches the public JSON dataset through the library's `BaseApi`; `adaptGetDevicesResponse` supplies missing device IDs and product names before the data enters Redux. Search and product-line selections are stored in the filters slice. The list/grid buttons navigate between their respective routes.

There are no required environment variables at present. The catalog URL is configured directly in `src/api/ProductsApi`.

## Component library

`packages/lib` is a private workspace package imported by its subpaths, for example:

```tsx
import Checkbox from 'lib/atoms/Checkbox';
import Search from 'lib/molecules/Search';
import useClickOutside from 'lib/hooks/useClickOutside';
```

Public subpath groups include `lib/atoms/*`, `lib/molecules/*`, `lib/hooks/*`, `lib/icons/*`, `lib/utils/*`, and `lib/utilityTypes`. Import the shared tokens and global utility styles once from the application entry point:

```ts
import 'lib/tokens.module.scss';
import 'lib/assets/styles/index.scss';
```

Component examples and API documentation are available in Storybook. Run `npm run sb` to explore them locally.

## Testing

Vitest runs tests in the `jsdom` environment. Tests are colocated with the app and library code using `.test.ts` or `.test.tsx` filenames. Shared Testing Library setup is in `testUtils/setup.ts`. Run `npm test` before submitting changes; use `npm run test:watch` while developing.
