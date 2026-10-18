import type { T_AdaptedDeviceItem } from '../../types';

export interface T_DetailItem {
  id: string;
  label: string;
  value: string | number;
}

export default function collectDeviceDetails(device: T_AdaptedDeviceItem): Array<T_DetailItem> {
  const resolveMaxPower = () => {
    const maxPower = device.unifi?.network?.radios?.na?.maxPower;
    return maxPower ? `${maxPower} W` : '---';
  };

  const resolveSpeed = () => {
    const speed = device.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond;
    return speed ? `${speed} Mbps` : '---';
  };

  return [
    { id: '1', label: 'Product Line', value: device.line?.name ?? '---' },
    { id: '2', label: 'ID', value: device.id ?? '---' },
    { id: '3', label: 'Name', value: device.product.name ?? '---' },
    { id: '4', label: 'Short Name', value: device.shortnames?.join(' ') ?? '---' },
    {
      id: '5',
      label: 'Max. Power',
      value: resolveMaxPower(),
    },
    {
      id: '6',
      label: 'Speed',
      value: resolveSpeed(),
    },
    {
      id: '7',
      label: 'Number of ports',
      value: device.unifi?.network?.numberOfPorts ?? '---',
    },
  ];
}
