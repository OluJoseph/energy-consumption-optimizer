"use client";

import React, { useState, forwardRef, useRef } from "react";

import { DeviceStatus, GridProps, IDeviceData } from "@/app/util/constants";

const TableGrid = forwardRef(function TableGrid(
  { rowData, columnDefs }: GridProps,
  ref
) {
  let tableRef: any = useRef(null);

  return (
    <>
      <div className="relative flex-1 overflow-y-auto">
        <table id="tableGrid" className="tableGrid">
          <thead className="border-b dark:border-gray-700">
            <tr>
              {columnDefs.map((columnDef: any, idx: number) => (
                <th
                  key={idx}
                  className={`${"actionCol"} sticky top-0 bg-white dark:bg-gray-800`}
                >
                  <p className="truncate border-r dark:border-gray-700 pr-2 text-sm text-gray-600 dark:text-gray-400">
                    {columnDef.headerName}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody ref={tableRef} className="dark:text-slate-300">
            {rowData.map((row: IDeviceData, idx) => (
              <tr
                key={idx}
                className={`even:bg-slate-50 even:dark:bg-gray-900 hover:bg-slate-100" transition-all`}
              >
                <td>
                  <p className="mb-1">{row.deviceName}</p>
                  <p className="text-gray-500 dark:text-slate-600">
                    Avg. {row.averageDailyUsage.toFixed(2)}KWh daily
                  </p>
                </td>
                <td>
                  <p
                    className={`flex items-center gap-1 ${
                      row.status === DeviceStatus.always_on
                        ? "text-green-700"
                        : row.status === DeviceStatus.idle
                        ? "text-orange-700"
                        : ""
                    }`}
                  >
                    <span
                      className="material-symbols-rounded"
                      style={{ fontSize: "14px" }}
                    >
                      radio_button_checked
                    </span>
                    {row.status}
                  </p>
                </td>
                <td>{row.powerRating.toFixed(2)} Watts</td>
                <td>{row.totalPowerUsed.toFixed(2)} KWh</td>
                <td>{row.thresholdRating.toFixed(2)} KWh</td>
                <td>
                  <p className="font-semibold cursor-pointer">View</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default TableGrid;
