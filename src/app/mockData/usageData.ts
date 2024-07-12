import { IUsageRecord } from "../util/constants";

export const generateUsageDataset = (recordCount: number): IUsageRecord[] => {
  let mockData: IUsageRecord[] = [];

  let totalEnergyUsed = 0;
  let previousDayTotal = 0;

  for (let i = 0; i < recordCount; i++) {
    const timestamp =
      i === 0 ? new Date().setHours(0,0,0,0) - 86400000 : mockData[i - 1].timestamp + 3600000; // Start at one day before now
    const energyValue = Math.max(Math.random() * 500, 100); // Simulate increasing energy consumption

    totalEnergyUsed =
      i === 0 ? energyValue : energyValue + mockData[i - 1].totalEnergyUsed;

    const dailyPercentageChange =
      i >= 24
        ? ((totalEnergyUsed - previousDayTotal) / previousDayTotal) * 100
        : 0; // Calculate percentage change only after 24 hours

    previousDayTotal = i >= 23 ? mockData[i - 23].totalEnergyUsed : 0; // Update daily total at the end of the day

    mockData.push({
      timestamp,
      energyValue,
      totalEnergyUsed,
      dailyPercentageChange,
    });
  }

  return mockData;
};

