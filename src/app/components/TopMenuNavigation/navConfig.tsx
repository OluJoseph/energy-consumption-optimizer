import React from "react";

export type MenuOptionsProps = {
  name: string;
  link?: string | undefined;
  icon?: string | React.ReactNode;
};

export const menuOptions: MenuOptionsProps[] = [
  {
    name: "Dashboard",
    link: "/",
    icon: <span className="material-symbols-rounded">home</span>,
  },
  {
    name: "Appliances",
    link: "appliances",
	icon: <span className="material-symbols-rounded">deployed_code</span>,
  },
];
