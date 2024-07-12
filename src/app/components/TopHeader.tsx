import React from "react";
import TopMenu from "./TopMenuNavigation/TopMenu";
import Image from "next/image";

import Logo from "../../../public/logo.png";

const TopHeader = () => {
  return (
    <div className="h-[80px] bg-white dark:bg-gray-900 flex items-center justify-between relative px-12 py-4">
      <div className="flex gap-2 items-center">
        <Image
          src={Logo}
          alt="Logo"
          quality={100}
          style={{ objectFit: "cover" }}
        />
		<h3 className="font-semibold ">Smart Energy</h3>
      </div>
      <div className="relative h-full flex items-center gap-10">
        <TopMenu />
        <div className="h-[45px] bg-[#F3F4F6] border border-slate-200 dark:border-gray-700 dark:bg-gray-800 rounded-full flex gap-1 items-center pl-1 pr-2 py-1">
          <div className="flex items-center justify-center h-[30px] w-[30px] rounded-full bg-white text-gray-600">
            <span className="material-symbols-rounded">person</span>
          </div>
          <span className="text-gray-800 dark:text-slate-100 font-normal">
            {"User"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
