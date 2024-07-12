"use client";

import { useEffect, useState } from "react";
import { IUsage, IUsageRecord } from "../util/constants";
import Chart from "./Chart";

const TotalUsageChart = ({ usageData }: { usageData: IUsage }) => {
  const [chartTimeline, setChartTimeline] = useState<string>("daily");
  const [dataset, setDataset] = useState<IUsageRecord[]>([
    usageData.dataset[0],
  ]);

  const timelines: string[] = ["daily"];

  const chartTimelineMenu = timelines.map((timeline, index) => {
    return (
      <li
        key={index}
        onClick={() => setChartTimeline(timeline)}
        className={`text-gray-700 dark:text-slate-200 px-4 py-1 cursor-pointer ${
          chartTimeline === timeline &&
          "font-semibold bg-slate-100 dark:bg-gray-800 rounded-full"
        }`}
      >
        {timeline}
      </li>
    );
  });

  useEffect(() => {
    const chartRefreshInterval = setInterval(() => {
      if (usageData.dataset.length === dataset.length) {
        return clearInterval(chartRefreshInterval);
      }

      const newDataset: IUsageRecord[] = [...dataset];
      newDataset.push(usageData.dataset[dataset.length]);

      setDataset(newDataset);
    }, 5000);

    return () => {
      clearInterval(chartRefreshInterval);
    };
  }, [dataset]);

  return (
    <div className="p-4 border border-slate-100 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 flex flex-col gap-10">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-800 dark:text-slate-300 mb-1">
            Total Energy Used
          </p>
          <h3 className="font-semibold text-2xl mb-1">
            {dataset[dataset.length - 1].totalEnergyUsed.toFixed(2)} KWh
          </h3>
          <p className="flex items-center gap-2">
            <span
              className={`flex items-center ${
                dataset[dataset.length - 1].dailyPercentageChange >= 0
                  ? "text-green-600"
                  : "text-red-700"
              }`}
            >
              <span
                className="material-symbols-rounded"
                style={{ fontSize: "16px" }}
              >
                {dataset[dataset.length - 1].dailyPercentageChange < 0
                  ? "arrow_cool_down"
                  : "arrow_warm_up"}
              </span>
              {dataset[dataset.length - 1].dailyPercentageChange >= 0 && "+"}
              {dataset[dataset.length - 1].dailyPercentageChange.toFixed(
                2
              )}%{" "}
            </span>
            <span className="text-sm text-gray-600">from 24 hours ago</span>{" "}
          </p>
        </div>
        <ul>{chartTimelineMenu}</ul>
      </div>
      <div>
        <Chart dataset={dataset} />
      </div>
    </div>
  );
};

export default TotalUsageChart;
