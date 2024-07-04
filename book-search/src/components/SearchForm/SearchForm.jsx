import React, { useState } from "react";
import SearchImg from "images/search.svg";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "@/context";
import { categories, sortOptions } from "constants/formConstants";
import SelectBox from "./SelectBox";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchParams } = useGlobalContext();
  const [searchParams, setSearchParamsLocal] = useState({
    searchTerm: "",
    category: "all",
    sortBy: "relevance",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.searchTerm.trim() !== "") {
      setSearchParams(searchParams);
    }
  };

  const handleInputChange = (e) => {
    setSearchParamsLocal({
      ...searchParams,
      searchTerm: e.target.value,
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleCategoryChange = (e) => {
    setSearchParamsLocal({
      ...searchParams,
      category: e.target.value,
    });
  };

  const handleSortChange = (e) => {
    setSearchParamsLocal({
      ...searchParams,
      sortBy: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputBox flex-center">
        <div className="inputContainer flex-center">
          <input
            type="text"
            placeholder="Search"
            value={searchParams.searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button type="submit" className="flex-center">
            <FaSearch className="text-purple" size={32} />
          </button>
        </div>
      </div>
      <div className="filterBox flex-center">
        <SelectBox
          options={categories}
          value={searchParams.category}
          onChange={handleCategoryChange}
          label="Category:"
        />
        <SelectBox
          options={sortOptions}
          value={searchParams.sortBy}
          onChange={handleSortChange}
          label="Sort by:"
        />
      </div>
    </form>
  );
};

export default SearchForm;
