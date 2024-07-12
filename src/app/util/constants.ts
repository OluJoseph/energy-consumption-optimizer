export enum DeviceStatus {
  always_on = "Always On",
  idle = "Idle",
  running = "Running",
}

export interface IUsageRecord {
  timestamp: number;
  energyValue: number;
  totalEnergyUsed: number;
  dailyPercentageChange: number;
}

export interface IUsage {
  totalEnergyBudget: number;
  dataset: IUsageRecord[];
}

export interface IDeviceData {
  deviceName: string;
  averageDailyUsage: number;
  status: DeviceStatus | string;
  powerRating: number;
  totalPowerUsed: number;
  thresholdRating: number;
  usageDataset: IUsageRecord[];
}

export type GridProps = {
  rowData: any[];
  columnDefs: any[];
};
