import type { I_ColSchemaItem } from 'lib/organisms/Table';

export const APP_ROUTE = {
  ROOT: '/',
  GRID_VIEW: 'grid-view',
  PRODUCTS: 'products/:id',
  ERRORS: '/errors/:code?',
} as const;

export const PRODUCT_LIST_SCHEMA: I_ColSchemaItem[] = [
  { id: 'product-list-col-1', label: '', width: '40px' },
  { id: 'product-list-col-2', label: 'Product Line' },
  { id: 'product-list-col-3', label: 'Name' },
] as const;
