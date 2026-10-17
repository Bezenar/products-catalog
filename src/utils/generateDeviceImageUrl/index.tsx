import type { T_AdaptedDeviceItem } from '../../types';

export default function generateDeviceImageUrl(device: T_AdaptedDeviceItem, size: number): string {
  const id = device.id;
  const image = device.images?.default ?? '---';

  return `https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2F${id}%2Fdefault%2F${image}.png&w=${size}&q=75`;
}
