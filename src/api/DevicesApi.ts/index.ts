import { BaseApi } from 'lib';
import type { T_DeepPartial } from '../../../packages/lib/utilityTypes';
import type { I_GetDevicesRes } from '../../types';

export default class DevicesApi extends BaseApi {
  getDevices() {
    return this.request<T_DeepPartial<I_GetDevicesRes>>({
      path: 'https://static.ui.com/fingerprint/ui/public.json',
    });
  }
}
