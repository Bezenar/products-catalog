import type { I_AdaptedGetDevicesRes, I_GetDevicesRes } from '../../types';
// TODO : MISSED TESTS
export default function adaptGetDevicesResponse(response: I_GetDevicesRes): I_AdaptedGetDevicesRes {
  return {
    devices: response.devices.map((d) => ({
      ...d,
      id: d.id ?? crypto.randomUUID(),
      product: {
        ...d.product,
        name: d.product?.name ?? '---',
      },
    })),
    version: response.version,
  };
}
