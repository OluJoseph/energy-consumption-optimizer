import { axisClasses, LineChart } from "@mui/x-charts";
import { IUsageRecord } from "../util/constants";

interface ChartProps {
  dataset: IUsageRecord[];
}

const customize = {
  height: 300,
  legend: { hidden: true },
  margin: { top: 5 },
};

const Chart = ({ dataset }: ChartProps) => {
  return (
    <div className="w-full">
      <LineChart
        sx={{
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: window?.matchMedia("(prefers-color-scheme: dark)").matches
                ? "white"
                : "black",
            },
            [`.${axisClasses.tickLabel}`]: {
              fill: window?.matchMedia("(prefers-color-scheme: dark)").matches
                ? "white"
                : "black",
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
            color: window?.matchMedia("(prefers-color-scheme: dark)").matches
              ? "white"
              : "black",
          },
        ]}
        {...customize}
      />
    </div>
  );
};

export default Chart;
