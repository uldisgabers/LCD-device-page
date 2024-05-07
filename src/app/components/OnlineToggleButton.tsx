import React from "react";

type ButtonProps = {
  buttonText: string;
  number: number;
  click?: () => void;
  variant: "online" | "offline";
};

function OnlineToggleButton({
  buttonText,
  number,
  click,
  variant,
}: ButtonProps) {
  const getButtonStyles = () => {
    if (variant === "online") {
      return "bg-skyblue border border-skyblue flex text-white font-medium p-2 rounded-lg gap-3 pl-4";
    } else if (variant === "offline") {
      return "border border-[#D6D8E0] flex text-deep-dark-blue font-medium p-2 rounded-lg gap-3 pl-4";
    }
    return "";
  };

  const getButtonNumberStyles = () => {
    if (variant === "online") {
      return "bg-[#D6EFFF] w-6 h-6 text-xs text-[#13496C] flex items-center justify-center rounded-md";
    } else if (variant === "offline") {
      return "bg-[#F0F1F4] w-6 h-6 text-xs flex items-center justify-center rounded-md";
    }
    return "";
  };

  return (
    <div
      className={`${getButtonStyles()} hover:cursor-pointer`}
      onClick={click}
    >
      {buttonText}
      <div className={`${getButtonNumberStyles()}`}>{number}</div>
    </div>
  );
}

export default OnlineToggleButton;
