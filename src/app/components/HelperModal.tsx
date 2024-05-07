"use client";

import React, { useEffect } from "react";
import ReactPortal from "./ReactPortal";

type HelperModalProps = {
  children: React.ReactElement;
  isOpen: boolean;
  handleClose: () => void;
};

function HelperModal({ children, isOpen, handleClose }: HelperModalProps) {
  // disable scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-800 opacity-50"></div>
        <div className="fixed rounded flex flex-col box-border min-w-fit overflow-hidden p-5 bg-[#F0F1F4] inset-y-10 inset-x-10 z-50 text-deep-dark-blue">
          <button
            onClick={handleClose}
            className="py-2 px-8 self-end font-bold hover:bg-skyblue border border-light-border-gray rounded"
          >
            Close
          </button>
          <div className="box-border h-5/6">{children}</div>
        </div>
      </>
    </ReactPortal>
  );
}

export default HelperModal;
