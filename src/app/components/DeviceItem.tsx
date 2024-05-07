"use client";

import { ChevronRight } from "akar-icons";
import React, { useState } from "react";
import HelperModal from "./HelperModal";

type Item = {
  id: number;
  name: string;
  connection: number;
  model: string;
  status: string;
};

type PropType = {
  item: Item;
};

function DeviceItem({ item }: PropType) {
  const [showButtons, setShowButtons] = useState(false);
  const [helperModalOpen, setHelperModalOpen] = useState(false);

  return (
    <div
      key={item.id}
      className={`border border-light-border-gray rounded-lg pl-5 pr-2 py-3 flex gap-3 flex-wrap md:flex-nowrap ${
        showButtons ? "border-light-gray" : "border-light-border-gray"
      }`}
      onMouseEnter={() => {
        setShowButtons(true);
      }}
      onMouseLeave={() => {
        setShowButtons(false);
      }}
    >
      <div className="flex items-center gap-3 max-w-[250px] w-full">
        <div
          className={`${
            item.connection == 0 ? "bg-red-600" : "bg-green-600"
          }  rounded size-1.5`}
        ></div>
        <div>
          <h3 className="text-sm font-medium text-deep-dark-blue">{item.name}</h3>
          <p className="text-xs font-normal text-light-gray-blue">
            Connection: {item.connection}%
          </p>
        </div>
      </div>
      <div className="max-w-[140px] w-full">
        <p className="text-xs font-normal text-light-gray-blue">Model</p>
        <h3 className="text-sm font-medium text-deep-dark-blue">{item.model}</h3>
      </div>
      <div className="w-full">
        <p className="text-xs font-normal text-light-gray-blue">Con-stat</p>
        <h3 className="text-sm font-medium text-deep-dark-blue">{item.status}</h3>
      </div>
      <div className="flex gap-1 items-center">
        {showButtons && (
          <>
            <button
              className="bg-[#F0F1F4] rounded-lg font-medium text-sm text-deep-dark-blue px-4 py-2"
              onClick={() => setHelperModalOpen(!helperModalOpen)}
            >
              Settings
            </button>
            <button
              className="bg-[#F0F1F4] rounded-lg font-medium text-sm text-deep-dark-blue px-4 py-2"
              onClick={() => setHelperModalOpen(!helperModalOpen)}
            >
              Control
            </button>
          </>
        )}
        <div className="flex items-center justify-center size-9">
          <ChevronRight color="#9DA0AF" size={16} />
        </div>
      </div>
      {helperModalOpen && (
        <HelperModal
          isOpen={helperModalOpen}
          handleClose={() => setHelperModalOpen(!helperModalOpen)}
        >
          <div>
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium illo veritatis sed in?
            </h1>
          </div>
        </HelperModal>
      )}
    </div>
  );
}

export default DeviceItem;
