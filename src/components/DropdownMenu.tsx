import React from "react";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  size: "Desktop" | "Mobile";
  variant: "Moodlet";
  showOption1?: boolean;
  showOption2?: boolean;
  showOption3?: boolean;
  showOption4?: boolean;
  showScroll?: boolean;
  divider?: boolean;
  mode?: "readOnly" | "interaction";
  state?:
    | "default"
    | "hover"
    | "primary"
    | "inactive"
    | "secondary"
    | "blue"
    | "green"
    | "red"
    | "yellow"
    | "placeholder"
    | "disabled";
  icon?: boolean;
  label?: string;
}

const moodletStyles: Record<string, string> = {
  "primary-default": "bg-[#824DFF] text-white",
  "primary-hover": "bg-[#6D0EF1] text-white",
  "primary-readOnly": "bg-[#E2DEED] border border-[#824DFF] text-black",

  "inactive-default": "bg-[#998DBF] text-white",
  "inactive-hover": "bg-[#6E5CA3] text-white",
  "inactive-readOnly": "bg-[#D3CEE3] border border-[#808080] text-black",

  "secondary-default": "bg-[#09A7AA] text-white",
  "secondary-hover": "bg-[#007780] text-white",
  "secondary-readOnly": "bg-[#CCFFE9] border border-[#09A7AA] text-black",

  "blue-default": "bg-[#0B94D8] text-white",
  "blue-hover": "bg-[#0B94D8] text-white",
  "blue-readOnly": "bg-[#B2E5FF] border border-[#0B94D8] text-black",

  "green-default": "bg-[#319B31] text-white",
  "green-hover": "bg-[#247524] text-white",
  "green-readOnly": "bg-[#D6F6D6] border border-[#D6F6D6] text-black",

  "red-default": "bg-[#D22D5C] text-white",
  "red-hover": "bg-[#A82443] text-white",
  "red-readOnly": "bg-[#F6D6E4] border border-[#D22D5C] text-black",

  "yellow-default": "bg-[#FFD116] text-black",
  "yellow-hover": "bg-[#C39100] text-black",
  "yellow-readOnly": "bg-[#FEFFCF] text-black",

  "placeholder": "bg-[#BDB2FF] border border-[#824DFF] text-black",
  "disabled": "bg-[#E2DEED] border border-[#998DBF] text-black cursor-not-allowed"
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  size,
  variant,
  showOption1 = true,
  showOption2 = true,
  showOption3 = true,
  showOption4 = true,
  showScroll = true,
  divider = false,
  mode = "interaction",
  state = "default",
  icon = true,
  label = "LOR"
}) => {
  const options = [
    showOption1 && "Option 01",
    showOption2 && "Option 02",
    showOption3 && "Option 03",
    showOption4 && "Option 04"
  ].filter(Boolean);

  const key = state === "default" || state === "hover"
    ? `primary-${state}`
    : `${state}-${mode === "readOnly" ? "readOnly" : "default"}`;

  const moodletClass = cn(
    "inline-flex items-center justify-center h-[14px] w-[42px] rounded-full gap-[3px] px-[4px] text-[10px] font-medium leading-none transition-colors",
    mode === "interaction" && "cursor-pointer",
    moodletStyles[key] || ""
  );

  const menuStyle = cn(
    "border border-[#A89DC8] shadow-[0px_1px_2px_0px_#919EAB1F] bg-[#F8F7FA]",
    size === "Desktop"
      ? "w-[215px] h-[113px] rounded-[4px] gap-[5px] pt-[5px] pr-[6px] pb-[5px] pl-[6px]"
      : "w-[215px] h-[150px] rounded-[4px] gap-[6px] pt-[6px] pr-[4px] pb-[6px] pl-[4px]"
  );

  return (
    <div className="flex flex-col items-start">
      <div className={moodletClass}>
        {icon && (
          <span className="w-[10px] h-[10px] bg-[url('../assets/iqm-icon.png')] bg-contain bg-no-repeat filter invert" />
        )}
        <span>{label}</span>
      </div>
      <div className={menuStyle}>
        {options.map((option, idx) => (
          <div key={idx} className="text-sm py-1 px-2">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
