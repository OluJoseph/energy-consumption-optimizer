import { IDeviceData, IUsageRecord } from "../util/constants";
import { generateUsageDataset } from "./usageData";

export const generateDeviceData = (): IDeviceData[] => {
  const mockData: IDeviceData[] = [];

  const deviceNames: string[] = [
    "Air Conditioner",
    "Refrigerator",
    "Water Heater",
    "Washing Machine",
    "Dryer",
  ];

  const statuses: string[] = ["Always On", "Idle", "Running"];

  deviceNames.forEach((name: string) => {
    const usageStat: IUsageRecord[] = generateUsageDataset(48);

    mockData.push({
      deviceName: name,
      averageDailyUsage: Math.random() * 100,
      status: statuses[Math.floor(Math.random() * 3)],
      powerRating: Math.random() * 200,
      totalPowerUsed: usageStat[usageStat.length - 1].totalEnergyUsed,
      thresholdRating: Math.random() * 5000,
      usageDataset: usageStat,
    });
  });

  return mockData;
};
