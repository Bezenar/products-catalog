import type { I_AdaptedGetDevicesRes, I_GetDevicesRes } from '../../types';

export default function adaptGetDevicesResponse(response: I_GetDevicesRes): I_AdaptedGetDevicesRes {
  return {
    devices: response.devices.map((d) => ({
      ...d,
      id: d.id ?? crypto.randomUUID(),
      product: {
        ...d.product,
        name: d.product?.name ?? '---',
      },
      shortnames: d.shortnames?.filter(
        (shortname): shortname is string => typeof shortname === 'string',
      ),
    })),
    version: response.version,
  };
}
