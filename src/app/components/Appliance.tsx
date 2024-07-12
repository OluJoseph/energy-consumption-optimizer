import React from "react";
import Modal from "./Modal";

import { IDeviceData } from "../util/constants";
import Chart from "./Chart";

type ApplianceModalProps = {
  closeModal: any;
  appliance: IDeviceData;
};

const Appliance = ({ closeModal, appliance }: ApplianceModalProps) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="w-full sm:h-[750px] py-10 px-14 flex gap-4">
        <div className="flex flex-col flex-1">
          <span
            className="material-symbols-rounded mb-10"
            style={{ fontSize: "40px" }}
          >
            deployed_code
          </span>
          <div className="flex-1 w-full">
            <div className="flex gap-6 items-center mb-2">
              <h1 className="text-2xl font-semibold">{appliance.deviceName}</h1>
              <p className="text-sm text-green-600 flex items-center">
                <span
                  className="material-symbols-rounded mr-1"
                  style={{ fontSize: "12px" }}
                >
                  radio_button_checked
                </span>
                <span>{appliance.status}</span>
              </p>
            </div>
            <p className="text-gray-800 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              quis fugit saepe sunt quae modi vero aliquid perspiciatis in velit
              doloremque tenetur architecto exercitationem, explicabo harum!
              Eligendi incidunt neque illum.
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="border-2 border-orange-50 dark:border-gray-800 rounded-full py-4 px-7 flex gap-2">
              <span
                className="material-symbols-rounded text-orange-300 mt-1"
                style={{ fontSize: "20px" }}
              >
                warning
              </span>

              <div>
                <p className="text-sm text-gray-700 dark:text-slate-400 mb-3">
                  This appliance's current power is at{" "}
                  {appliance.totalPowerUsed.toFixed(2)}KWh of its{" "}
                  {appliance.thresholdRating.toFixed(2)}KWh threshold power
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
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-gray-50 dark:bg-gray-800 h-full flex flex-col gap-4 p-4">
          <h3 className="font-medium text-lg">Appliance Details</h3>
          <div className="rounded-lg border-2 bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-700 w-full p-4">
            <p className="text-sm text-gray-700 dark:text-slate-300 mb-6">
              Energy used:{" "}
              <span className="font-semibold text-black dark:text-slate-100">
                {appliance.totalPowerUsed.toFixed(2)}KWh
              </span>
            </p>
            <div className="w-full">
              <Chart dataset={appliance.usageDataset} />
            </div>
            <p className="text-gray-700 dark:text-slate-300 text-sm">
              Consumption over the last 24 hours
            </p>
          </div>
          <div>
            <p className="font-medium mb-2">Dependencies</p>
            <div></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Appliance;
