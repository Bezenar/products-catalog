import type { T_DeepPartial } from 'lib/utilityTypes';

export interface I_DeviceCompliance {
  fcc: string;
  ic: string;
  icEmi: string;
  modelName: string;
  rcm: boolean;
  rfCmFcc: number;
  rfCmIc: number;
  text: {
    CA: string[];
    US: string[];
  };
}

export interface I_DeviceIcon {
  id: string;
  resolutions: Array<[number, number]>;
}

export interface I_DeviceImages {
  default: string;
  nopadding: string;
  topology: string;
}

export interface I_DeviceLine {
  id: string;
  name: string;
}

export interface I_DeviceProduct {
  name: string;
  abbrev: string;
}

export interface I_DeviceTriplet {
  [k: string]: string;
}

export interface I_Firmware {
  board: Array<string>;
  platform: string;
}

export interface I_DeviceUISP {
  bleServices: Record<PropertyKey, unknown>;
  firmware: I_Firmware;
  line: string;
  nameLegacy: Array<string>;
}

export interface I_DeviceItem {
  compliance: I_DeviceCompliance;
  deviceType: string;
  deviceTypes: Array<string>;
  guids: Array<unknown>;
  icon: I_DeviceIcon;
  id: string;
  images: I_DeviceImages;
  line: I_DeviceLine;
  product: I_DeviceProduct;
  shortnames: Array<string>;
  sku: string;
  sysid: string;
  sysids: Array<string>;
  triplets: Array<I_DeviceTriplet>;
  uisp: I_DeviceUISP;
  videos: Record<PropertyKey, unknown>;
}

export interface I_GetDevicesRes {
  devices: Array<T_DeepPartial<I_DeviceItem>>;
  version: string;
}

export type T_AdaptedDeviceItem = Omit<T_DeepPartial<I_DeviceItem>, 'id' | 'product'> & {
  id: string;
  product: Omit<T_DeepPartial<I_DeviceProduct>, 'name'> & { name: string };
  shortnames?: Array<string>;
};

export interface I_AdaptedGetDevicesRes {
  devices: Array<T_AdaptedDeviceItem>;
  version: string;
}

export type T_AdaptedDeviceLine = Required<
  Required<I_AdaptedGetDevicesRes['devices'][number]>['line']
>;

export type T_ProductsSlice = I_AdaptedGetDevicesRes & { isLoading: boolean; hasError: boolean };

export interface I_FiltersSlice {
  searchValue: string;
  selectedCategories: Array<string>;
}
