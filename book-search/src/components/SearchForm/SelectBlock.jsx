import React from "react";

export default function SelectBlock({ label, options, value, onChange }) {
  return (
    <div className="selectBlock">
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="flex-center"
      >
        {label}:
      </label>
      <select
        id={label.toLowerCase().replace(" ", "-")}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
