import TableGrid from "./components/Grid/TableGrid";
import PageHeader from "./components/PageHeader";
import TotalUsageChart from "./components/TotalUsageChart";
import { generateDeviceData } from "./mockData/devices";
import { generateUsageDataset } from "./mockData/usageData";
import { DeviceStatus, IDeviceData, IUsage } from "./util/constants";

export default function Home() {
  const totalUsageData: IUsage = {
    totalEnergyBudget: 10000,
    dataset: generateUsageDataset(72),
  };

  const appliances: IDeviceData[] = generateDeviceData();

  const getAlerts = () => {
    const alertNodes = appliances.map((appliance: IDeviceData, idx) => {
      return (
        appliance.totalPowerUsed > appliance.thresholdRating && (
          <li
            key={idx}
            className="flex flex-col gap-4 border-b py-4 border-gray-100 dark:border-gray-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{appliance.deviceName}</p>
                <p className="text-gray-600 dark:text-slate-400 text-sm">
                  Avg. daily power usage{" "}
                  {appliance.averageDailyUsage.toFixed(2)}KWh
                </p>
              </div>
              <p className="text-sm flex items-center gap-1">
                <span
                  className={`material-symbols-rounded ${
                    appliance.status === DeviceStatus.always_on
                      ? "text-green-700"
                      : appliance.status === DeviceStatus.idle
                      ? "text-orange-700"
                      : ""
                  }`}
                  style={{ fontSize: "12px" }}
                >
                  radio_button_checked
                </span>
                {appliance.status}
              </p>
            </div>
            <div className="rounded-lg border border-orange-100 dark:border-gray-800 bg-[#fcfaf6] dark:bg-gray-800 p-4 flex gap-3">
              <div className="border h-fit border-orange-300 flex items-center justify-center rounded-md p-1 ">
                <span
                  className="material-symbols-rounded text-orange-400"
                  style={{ fontSize: "12px" }}
                >
                  error
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-slate-300 mb-1 text-sm">
                  Power Alert
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  This appliance is using above its threshold power. Kindly take
                  action
                </p>
                <ul className="flex gap-4">
                  <li className="cursor-pointer text-sm font-semibold">
                    Allow
                  </li>
                  <li className="text-orange-600 font-medium cursor-pointer text-sm">
                    Turn Off
                  </li>
                </ul>
              </div>
            </div>
          </li>
        )
      );
    });

    return alertNodes;
  };

  const columnDefs = [
    { headerName: "Device Name" },
    { headerName: "Status" },
    { headerName: "Power Rating" },
    { headerName: "Power Used" },
    { headerName: "Threshold Rating" },
  ];

  return (
    <main className="flex flex-col items-start justify-between gap-4 pb-20">
      <div className="w-full sticky top-[81px] z-50">
        <PageHeader
          title={`Welcome, ${"User"}`}
          message="Here's an overview of all your appliances"
          icon={<span className="material-symbols-rounded">home</span>}
        />
        <hr className="dark:border-gray-800 border-gray-100 w-full" />
      </div>
      <div className="flex gap-4 w-full px-12">
        <div className="flex-1 flex flex-col gap-4">
          <TotalUsageChart usageData={totalUsageData} />
          <div className="w-full bg-white dark:bg-gray-800 p-4 border-slate-100 dark:border-gray-800 rounded-lg">
            <TableGrid rowData={appliances} columnDefs={columnDefs} />
          </div>
        </div>
        <div className="flex flex-col gap-4 h-fit max-h-[400px]">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 min-h-[400px] h-fit flex flex-col ">
            <p className="pb-2 text-gray-700 dark:text-slate-300 font-semibold border-b border-gray-100 dark:border-gray-800">
              Alerts
            </p>
            <ul className="flex flex-col gap-2 h-full overflow-auto pr-4">
              {getAlerts()}
            </ul>
          </div>
          <div className="relative p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 max-h-[450px] min-h-[300px] h-fit flex flex-col">
            <p className="pb-2 text-gray-700 dark:text-slate-300 font-semibold border-b border-gray-100 dark:border-gray-800">
              Recent Activity
            </p>
            <ul className="flex flex-col gap-2 h-full overflow-auto pr-4">
              <li className="py-4 border-b border-gray-100 dark:border-gray-800 flex gap-2">
                <span
                  className="material-symbols-rounded py-1"
                  style={{ fontSize: "16px" }}
                >
                  switches
                </span>
                <div>
                  <p className="text-sm mb-1">You turned off Air Conditioner</p>
                  <p className="text-sm text-gray-500">Updated 1 minutes ago</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
