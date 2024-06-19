import React from "react";
import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import FilterSort from "../FilterSort/FilterSort";

export default function Header({ onSearch, onFilterChange, onSortChange }) {
  return (
    <header>
      <div id="title" className="flex-center">
        <h1>Search for books</h1>
      </div>
      <div id="searchBox">
        <SearchInput onSearch={onSearch} />
        <FilterSort
          onFilterChange={onFilterChange}
          onSortChange={onSortChange}
        />
      </div>
    </header>
  );
}
