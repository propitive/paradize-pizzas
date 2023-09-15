import React, { useEffect } from "react";
import { useState } from "react";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export function SingleSelect({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [HighlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    onChange(undefined);
  }
  function selectOption(option: SelectOption) {
    if (option !== value) onChange(option);
  }
  function isOptionSelected(option: SelectOption) {
    return option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      className="single-select"
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
    >
      <span className="single-select__value">{value?.label}</span>
      <button
        className="single-select__clear-button"
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className="single-select__divider"></div>
      <div className="single-select__caret"></div>
      <ul
        className={
          isOpen
            ? "single-select__options single-select__show"
            : "single-select__options"
        }
      >
        {options.map((option, index) => (
          <li
            className={`${"single-select__option"} ${
              isOptionSelected(option) ? "single-select__selected" : ""
            } ${
              index === HighlightedIndex ? "single-select__highlighted" : ""
            }`}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.label}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SingleSelect;
