import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { categories, sortOptions } from "../../constants/formConstants";
import SelectBox from "./SelectBox";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setCategory, setSortBy, setBooks, setTotalItems } =
    useGlobalContext();
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("relevance");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      setSearchTerm(searchValue);
      setCategory(selectedCategory);
      setSortBy(selectedSort);
      setBooks([]);
      setTotalItems(0);
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
            <div className="filter-options">
              <SelectBox
                options={categories}
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="Category"
              />
              <SelectBox
                options={sortOptions}
                value={selectedSort}
                onChange={handleSortChange}
                label="Sort by"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
