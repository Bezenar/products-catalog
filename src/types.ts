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
    resolutions: Array<[number, number]>
}

export interface I_DeviceImages {
    defaul: string;
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
  id: string
  images: I_DeviceImages;
  line: I_DeviceLine;
  product: I_DeviceProduct;
  shortnames: Array<string>;
  sku: string;
  sysid: string;
  sysids: Array<string>;
  triplets: Array<I_DeviceTriplet>;
  "uisp": I_DeviceUISP;
  videos: Record<PropertyKey, unknown>
}

export interface I_GetDevicesRes {
    devices: Array<I_DeviceItem>;
    version: string;
}