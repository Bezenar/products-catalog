import BaseApi from 'lib/utils/BaseApi';
import adaptGetDevicesResponse from '../../adapters/adaptGetDevicesResponse';
import type { I_AdaptedGetDevicesRes, I_GetDevicesRes } from '../../types';

export default class ProductsApi extends BaseApi {
  getDevices() {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    return this.request<I_GetDevicesRes, {}, I_AdaptedGetDevicesRes>({
      path: 'https://static.ui.com/fingerprint/ui/public.json',
      transformResponse: (res) => adaptGetDevicesResponse(res),
    });
  }
}
