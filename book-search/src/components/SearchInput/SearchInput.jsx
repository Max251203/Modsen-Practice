import React, { useState } from "react";
import "./SearchInput.css";
import loupe from "../../assets/loupe.png";

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div id="searchInputBox">
      <input
        id="searchInput"
        className="input"
        type="text"
        placeholder="React"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch} className="but flex-center">
        <img src={loupe} alt="Search" />
      </button>
    </div>
  );
}
