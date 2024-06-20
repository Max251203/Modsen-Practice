import React, { useState } from "react";
import "./SearchForm.css";
import loupe from "../../assets/loupe.png";
import SelectBlock from "./SelectBlock";
import { categories, sortOptions } from "../../data";

export default function SearchForm({ onFormChange }) {
  const [formState, setFormState] = useState({
    query: "",
    filter: "all",
    sort: "relevance",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormChange(formState);
  };

  const handleInputChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      query: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="searchInputBox">
        <input
          id="searchInput"
          className="input"
          type="text"
          placeholder="React"
          value={formState.query}
          onChange={handleInputChange}
        />
        <button className="but flex-center" type="submit">
          <img src={loupe} alt="Search" />
        </button>
      </div>
      <div id="filterSortBox">
        <SelectBlock
          label="Categories"
          options={categories}
          value={formState.filter}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, filter: e.target.value }))
          }
        />
        <SelectBlock
          label="Sorting by"
          options={sortOptions}
          value={formState.sort}
          onChange={(e) =>
            setFormState((prev) => ({
              ...prev,
              sort: e.target.value,
            }))
          }
        />
      </div>
    </form>
  );
}
