"use client";

import React from "react";
import Logo from "../../../public/Logo";
import { Grid, Folder, Gear, DesktopDevice, ChevronDown } from "akar-icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <div className="flex py-4 place-content-between max-w-6xl w-full mx-auto">
      <div className="flex gap-12">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="text-[#C5C7D3] text-sm flex gap-8">
          <Link
            className={
              pathname == "/dashboard"
                ? "flex gap-2 items-center text-white"
                : "flex gap-2 items-center hover:text-white"
            }
            href={"/dashboard"}
          >
            <Grid
              color={pathname == "/dashboard" ? "#3498DB" : "#9DA0AF"}
              strokeWidth={2}
              size={24}
            />
            <h3 className="hidden md:block">Dashboard</h3>
          </Link>
          <Link
            className={
              pathname == "/connectors"
                ? "flex gap-2 items-center text-white"
                : "flex gap-2 items-center hover:text-white"
            }
            href={"/connectors"}
          >
            <Folder
              color={pathname == "/connectors" ? "#3498DB" : "#9DA0AF"}
              strokeWidth={2}
              size={24}
            />
            <h3 className="hidden md:block">Connectors</h3>
          </Link>
          <Link
            className={
              pathname == "/devices"
                ? "flex gap-2 items-center text-white"
                : "flex gap-2 items-center hover:text-white"
            }
            href={"/devices"}
          >
            <DesktopDevice
              color={pathname == "/devices" ? "#3498DB" : "#9DA0AF"}
              strokeWidth={2}
              size={24}
            />
            <h3 className="hidden md:block">Devices</h3>
          </Link>
          <Link
            className={
              pathname == "/general"
                ? "flex gap-2 items-center text-white"
                : "flex gap-2 items-center hover:text-white"
            }
            href={"/general"}
          >
            <Gear
              color={pathname == "/general" ? "#3498DB" : "#9DA0AF"}
              strokeWidth={2}
              size={24}
            />
            <h3 className="hidden md:block">General Settings</h3>
          </Link>
        </div>
      </div>
      <div className="justify-self-start">
        <div
          className="text-light-gray flex items-center gap-2 justify-self-end hover:cursor-pointer"
          onClick={() => handleProfileOpen()}
        >
          <div className="rounded-full size-8 bg-gradient-to-tr from-[#9FA6C1] to-[#CDD2E2] flex items-center justify-center text-deep-dark-blue select-none">
            R
          </div>
          <h4 className="select-none hidden lg:block">Roberts</h4>
          <ChevronDown size={14} />
        </div>
        {profileOpen && (
          <div className="max-w-40 w-full bg-white rounded-md mt-2 absolute -translate-x-28 lg:-translate-x-10 p-2">
            <h3>Lorem, ipsum.</h3>
            <h3>Lorem, ipsum.</h3>
            <h3>Lorem, ipsum.</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
