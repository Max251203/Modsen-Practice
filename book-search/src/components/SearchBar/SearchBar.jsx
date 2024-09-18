import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { categories, sortOptions } from "@constants/options";
import SelectBox from "./SelectBox";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("relevance");

  const handleSearch = () => {
    onSearch(query, category, sort);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div id="searchBar">
      <div className="inputBox flex-center">
        <input
          type="text"
          id="searchQuery"
          name="searchQuery"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Название книги..."
        />
        <button onClick={handleSearch} type="submit" className="flex-center">
          <FaSearch size={32} />
        </button>
      </div>

      <div className="filterBox flex-center">
        <SelectBox
          options={categories}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category:"
          id="categorySelect"
          name="category"
        />
        <SelectBox
          options={sortOptions}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          label="Sort by:"
          id="sortSelect"
          name="sort"
        />
      </div>
    </div>
  );
};

export default SearchBar;
