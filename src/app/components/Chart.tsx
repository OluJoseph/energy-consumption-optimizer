import { LineChart } from "@mui/x-charts";
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
            color: "black",
          },
        ]}
        {...customize}
      />
    </div>
  );
};

export default Chart;
