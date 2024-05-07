"use client";

import { Search } from "akar-icons";
import React, { useMemo, useState } from "react";
import DeviceItem from "./DeviceItem";
import OnlineToggleButton from "./OnlineToggleButton";

function DeviceInfo() {
  type Item = {
    id: number;
    name: string;
    connection: number;
    model: string;
    status: string;
  };

  const data = [
    {
      id: 1,
      name: "Main Entry Intercom",
      connection: 0,
      model: "2N Verso",
      status: "235/235 messages over 28 days",
    },
    {
      id: 2,
      name: "Side Entry Intercom",
      connection: 0,
      model: "4N Verso",
      status: "90/10 messages over 28 days",
    },
    {
      id: 3,
      name: "Main Entry Intercom",
      connection: 0,
      model: "3N Verso",
      status: "0 messages over 28 days",
    },
    {
      id: 4,
      name: "Main Entry Intercom",
      connection: 100,
      model: "2N Verso",
      status: "20 messages over 28 days",
    },
    {
      id: 5,
      name: "Main Entry Intercom",
      connection: 91,
      model: "5N Verso",
      status: "10 messages over 28 days",
    },
  ];

  const [devices, setDevices] = useState(data);
  const [showOnline, setShowOnline] = useState(true);

  let devicesOnline = devices.filter((device) => device.connection > 0).length;
  let devicesOffline = devices.filter(
    (device) => device.connection == 0
  ).length;

  const [searchInput, setSearchInput] = useState("");

  const tasks = useMemo(() => {
    if (showOnline) {
      return devices.filter((device) => device.connection > 0);
    }
    return devices.filter((device) => device.connection == 0);
  }, [devices, showOnline]);

  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setDevices(data);
    filterDevices(searchInput);
  };

  const filterDevices = (searchInput: string) => {
    if (searchInput.length > 0) {
      let newDevices: Item[] = [];

      data.map((item: Item) => {
        if (
          item.name
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase()) ||
          item.model
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase()) ||
          item.status
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase())
        ) {
          newDevices.push(item);
        }
      });

      setDevices(newDevices);
    }
  };

  return (
    <div className="max-w-6xl w-full mx-auto rounded-lg border border-light-border-gray bg-white shadow-md">
      <div className="p-5">
        <div className="flex place-content-between flex-wrap align-middle gap-1">
          <div className="flex gap-1">
            <OnlineToggleButton
              buttonText="Online"
              number={devicesOnline}
              variant={showOnline ? "online" : "offline"}
              click={() => setShowOnline(true)}
            />
            <OnlineToggleButton
              buttonText="Offline"
              number={devicesOffline}
              variant={showOnline ? "offline" : "online"}
              click={() => setShowOnline(false)}
            />
          </div>
          <div className="flex items-center gap-2 px-4 text-light-gray-blue bg-[#F0F1F4] max-w-[300px] w-full rounded-lg h-9">
            <Search strokeWidth={2} size={20} color="#5C5F70" />
            <input
              type="text"
              placeholder="Quick search.."
              className="bg-transparent font-normal"
              onChange={handleChange}
              value={searchInput}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-1 ">
          {tasks.map((item: Item) => {
            return <DeviceItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="bg-[#F0F1F4] rounded-b-lg py-3 pl-5 text-light-gray-blue font-normal text-sm">
        Showing 1 - {tasks.length} of {data.length} devices
      </div>
    </div>
  );
}

export default DeviceInfo;
