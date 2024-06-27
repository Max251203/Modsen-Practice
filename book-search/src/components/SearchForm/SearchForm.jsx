import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";

const categories = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "newest", label: "Newest" },
];

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
                placeholder="Search for books..."
                value={searchValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
            <div className="filter-options">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="category-select"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedSort}
                onChange={handleSortChange}
                className="sort-select"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
