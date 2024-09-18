import React from "react";

const SelectBox = ({ options, value, onChange, label, id, name }) => {
  const isObjectArray = options.length > 0 && typeof options[0] === "object";

  return (
    <div className="selectBox">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
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
