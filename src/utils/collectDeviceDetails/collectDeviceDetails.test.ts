import { describe, expect, it } from 'vitest';
import type { T_AdaptedDeviceItem } from '../../types';
import collectDeviceDetails from './index';

describe('collectDeviceDetails', () => {
  it('returns device fields and formats power and speed', () => {
    const device: T_AdaptedDeviceItem = {
      id: 'device-1',
      product: { name: 'Dream Router' },
      line: { name: 'Network' },
      shortnames: ['UDR', 'Router'],
      unifi: {
        network: {
          numberOfPorts: 4,
          radios: {
            na: { maxPower: 20, maxSpeedMegabitsPerSecond: 1200 },
          },
        },
      },
    };

    expect(collectDeviceDetails(device)).toEqual([
      { id: '1', label: 'Product Line', value: 'Network' },
      { id: '2', label: 'ID', value: 'device-1' },
      { id: '3', label: 'Name', value: 'Dream Router' },
      { id: '4', label: 'Short Name', value: 'UDR Router' },
      { id: '5', label: 'Max. Power', value: '20 W' },
      { id: '6', label: 'Speed', value: '1200 Mbps' },
      { id: '7', label: 'Number of ports', value: 4 },
    ]);
  });

  it('uses fallback values when optional device details are missing', () => {
    const device: T_AdaptedDeviceItem = {
      id: 'device-2',
      product: { name: 'Switch 8' },
    };

    expect(collectDeviceDetails(device)).toEqual([
      { id: '1', label: 'Product Line', value: '---' },
      { id: '2', label: 'ID', value: 'device-2' },
      { id: '3', label: 'Name', value: 'Switch 8' },
      { id: '4', label: 'Short Name', value: '---' },
      { id: '5', label: 'Max. Power', value: '---' },
      { id: '6', label: 'Speed', value: '---' },
      { id: '7', label: 'Number of ports', value: '---' },
    ]);
  });

  it('uses fallback values when required ID and product name are absent at runtime', () => {
    const device = {
      product: {},
    } as unknown as T_AdaptedDeviceItem;

    expect(collectDeviceDetails(device).slice(1, 3)).toEqual([
      { id: '2', label: 'ID', value: '---' },
      { id: '3', label: 'Name', value: '---' },
    ]);
  });
});
