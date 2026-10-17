import { describe, expect, it } from 'vitest';
import type { T_AdaptedDeviceItem } from '../../types';
import generateDeviceImageUrl from './index';

describe('generateDeviceImageUrl', () => {
  it('builds the image service URL from the device ID, image key, and size', () => {
    const device: T_AdaptedDeviceItem = {
      id: 'device-123',
      product: { name: 'Device' },
      images: { default: 'image-key' },
    };

    expect(generateDeviceImageUrl(device, 40)).toBe(
      'https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2Fdevice-123%2Fdefault%2Fimage-key.png&w=40&q=75',
    );
  });

  it('uses the fallback image key when the default image is missing', () => {
    const device: T_AdaptedDeviceItem = {
      id: 'device-456',
      product: { name: 'Device' },
    };

    expect(generateDeviceImageUrl(device, 20)).toBe(
      'https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2Fdevice-456%2Fdefault%2F---.png&w=20&q=75',
    );
  });
});
