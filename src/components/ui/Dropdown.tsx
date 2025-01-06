"use client";

import { useState } from "react";
import { Icons } from "./Icons";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dropDownButtonVariants = cva(
  "flex items-center space-x-2 bg-white text-black px-3 py-2 rounded shadow-md focus:outline-none",
  {
    variants: {
      color: {
        filled: "bg-white text-[#545454]",
      },
      variant: {
        default: "",
        outline: "border",
        ghost: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
type TDowndownButtonVariants = VariantProps<typeof dropDownButtonVariants>;

export interface IDropDownOption<K = string> {
  key: NonNullable<K>;
  value: string | React.JSX.Element;
}

export interface IDropDownProps<K> {
  options: Array<IDropDownOption<K>>;
  defaultKey?: K;
  onSelect?: (option: IDropDownOption<K>["key"]) => void;
  onRenderSelectedOption?: (
    option: IDropDownOption<K>["key"]
  ) => React.JSX.Element;
  menuProps?: Pick<React.HTMLAttributes<HTMLElement>, "className"> & {
    position?: "left" | "right";
  };
  buttonProps?: Omit<React.ComponentProps<"input">, "color"> &
    TDowndownButtonVariants;
}

export function Dropdown<K = string>(props: IDropDownProps<K>) {
  const {
    options,
    defaultKey,
    menuProps,
    buttonProps,
    onSelect,
    onRenderSelectedOption,
  } = props;
  const [selectedOption, setSelectedOption] = useState<
    IDropDownOption<K>["key"] | undefined
  >(defaultKey || undefined);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleLanguageChange = (option: IDropDownOption<K>["key"]) => {
    onSelect?.(option);
    setSelectedOption(option);
    setIsOpenDropdown((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className={cn(
          dropDownButtonVariants({
            variant: buttonProps?.variant,
            color: buttonProps?.color,
          }),
          buttonProps?.className
        )}
        onClick={() => setIsOpenDropdown((prev) => !prev)}
      >
        {onRenderSelectedOption ? (
          onRenderSelectedOption(
            options.find((option) => option.key === selectedOption)?.key ??
              options[0].key
          )
        ) : (
          <span className="text-xl">
            {options.find((option) => option.key === selectedOption)?.value}
          </span>
        )}
        <span className="ml-2">
          <Icons.Down size={16} />
        </span>{" "}
      </button>

      {isOpenDropdown && (
        <div
          className={cn(
            "absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10",
            menuProps?.className,
            menuProps?.position === "left" ? "left-0" : "right-0"
          )}
        >
          {options.map((option) => (
            <button
              key={option.key.toString()}
              onClick={() => handleLanguageChange(option.key)}
              className="grid grid-cols-4 w-full px-2 py-2 text-sm text-black hover:bg-gray-100 focus:outline-none"
            >
              {selectedOption === option.key ? (
                <Icons.Check size={24} />
              ) : (
                <span></span>
              )}
              <div className="flex col-span-3 items-center space-x-2">
                {typeof option.value === "string" ? (
                  <span>{option.value}</span>
                ) : (
                  option.value
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
