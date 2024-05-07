'use client'

import { usePathname } from "next/navigation";
import React from "react";

function HomeNav() {
  const pathname = usePathname()

  return (
    <div className="max-w-6xl w-full mx-auto py-4 flex flex-col gap-3">
      <h3 className="text-light-gray text-sm">Home /</h3>
      <h2 className="text-white text-xl">{(pathname.length > 2) && pathname[1].toUpperCase() + pathname.slice(2)}</h2>
    </div>
  );
}

export default HomeNav;
