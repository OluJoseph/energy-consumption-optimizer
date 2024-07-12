"use client";

import { MenuOptionsProps, menuOptions } from "./navConfig";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MenuOptionsMobileProps = {
  menuOptions: MenuOptionsProps[];
};

const MenuOptionsDesktop = ({ menuOptions }: MenuOptionsMobileProps) => {
  const pathname = usePathname();
  // define html list items for the menu options provided
  let options = menuOptions.map((option: MenuOptionsProps, index) => {
    return (
      <li className="relative w-fit" key={index}>
        <p
          className={`flex gap-1 py-2 text-gray-800 dark:text-slate-100 items-center px-4 hover:text-black dark:hover:text-slate-200 ${
            option.link &&
            (pathname.substring(1) === option.link ||
              pathname === option.link) &&
            "font-semibold rounded-full border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800"
          } h-full transition duration-200 items-center`}
        >
          {option.icon}
          {option.link ? (
            <Link href={option.link}>{option.name}</Link>
          ) : (
            option.name
          )}
        </p>
      </li>
    );
  });

  return (
    <ul className="flex gap-6 items-center justify-start h-full">{options}</ul>
  );
};

const TopMenu = () => {
  return (
    <div className="relative h-full flex items-center lg:block">
      <div className="lg:inline-block w-full h-full">
        <MenuOptionsDesktop menuOptions={menuOptions} />
      </div>
    </div>
  );
};

export default TopMenu;
