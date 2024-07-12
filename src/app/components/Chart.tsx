"use client";

import { axisClasses, LineChart } from "@mui/x-charts";
import { IUsageRecord } from "../util/constants";
import { useEffect, useState } from "react";

interface ChartProps {
  dataset: IUsageRecord[];
}

const customize = {
  height: 300,
  legend: { hidden: true },
  margin: { top: 5 },
};

const Chart = ({ dataset }: ChartProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(window?.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <div className="w-full">
      <LineChart
        sx={{
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: isDarkMode ? "white" : "black",
            },
            [`.${axisClasses.tickLabel}`]: {
              fill: isDarkMode ? "white" : "black",
            },
          },
        }}
        dataset={dataset as any}
        xAxis={[
          {
            dataKey: "timestamp",
            valueFormatter: (value) =>
              new Date(value).getHours().toString().concat(":00"),
            min: dataset[Math.max(dataset.length - 23, 0)].timestamp,
            max: dataset[dataset.length - 1].timestamp,
          },
        ]}
        series={[
          {
            dataKey: "totalEnergyUsed",
            label: "Total Energy used",
            color: isDarkMode ? "white" : "black",
          },
        ]}
        {...customize}
      />
    </div>
  );
};

export default Chart;
