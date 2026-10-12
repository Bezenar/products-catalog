import { BaseApi } from 'lib';

export default class ProductsApi extends BaseApi {
  getProducts() {
    //TODO resolve types
    return this.request<any>({
      path: 'https://static.ui.com/fingerprint/ui/public.json',
    });
  }
}
