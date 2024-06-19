import React from "react";
import "./FilterSort.css";

export default function FilterSort({ onFilterChange, onSortChange }) {
  const categories = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];
  const sortOptions = ["relevance", "newest"];

  return (
    <div id="filterSortBox">
      <div className="selectBlock">
        <label htmlFor="categorySelect" className="flex-center">
          Categories:
        </label>
        <select
          id="categorySelect"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="selectBlock">
        <label htmlFor="sortSelect" className="flex-center">
          Sorting by:
        </label>
        <select id="sortSelect" onChange={(e) => onSortChange(e.target.value)}>
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
