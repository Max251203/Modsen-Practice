import React from "react";

const SelectBox = ({ options, value, onChange, label }) => {
  const isObjectArray = options.length > 0 && typeof options[0] === "object";

  return (
    <div className="select-wrapper">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => {
          const optionValue = isObjectArray ? option.value : option;
          const optionLabel = isObjectArray ? option.label : option;

          return (
            <option key={index} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
