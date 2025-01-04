"use client";

import { useState } from "react";
import { Icons } from "./Icons";

interface IDropDownOption<K = string> {
  key: NonNullable<K>;
  value: string | React.JSX.Element;
}

export interface IDropDownProps<K> {
  options: Array<IDropDownOption<K>>;
  defaultKey?: K;
  onSelect?: (option: IDropDownOption<K>["key"]) => void;
  onRenderSelectedOption?: (option: IDropDownOption<K>) => React.JSX.Element;
}

export function Dropdown<K = string>(props: IDropDownProps<K>) {
  const { options, defaultKey, onSelect, onRenderSelectedOption } = props;
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
      {/* Dropdown Button */}
      <button
        className="flex items-center space-x-2 bg-white text-black px-3 py-2 rounded shadow-md focus:outline-none"
        onClick={() => setIsOpenDropdown((prev) => !prev)}
      >
        {onRenderSelectedOption ? (
          onRenderSelectedOption(
            options.find((option) => option.key === selectedOption) ??
              options[0]
          )
        ) : (
          <span className="text-xl">
            {options.find((option) => option.key === selectedOption)?.value}
          </span>
        )}
        <span className="ml-2">
          <Icons.Down size={16} />
        </span>{" "}
        {/* Dropdown arrow */}
      </button>

      {/* Dropdown Menu */}
      {isOpenDropdown && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option.key.toString()}
              onClick={() => handleLanguageChange(option.key)}
              className="flex items-center justify-around w-full px-1 py-2 text-sm text-black hover:bg-gray-100 focus:outline-none"
            >
              {selectedOption === option.key && <Icons.Check size={24} />}
              <div className="flex items-center space-x-2">
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
