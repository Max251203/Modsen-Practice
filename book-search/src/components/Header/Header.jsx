import React from "react";
import SearchBar from "@components/SearchBar/SearchBar";
import "./Header.css";

const Header = ({ onSearch }) => {
  return (
    <header>
      <div id="headContent" className="flex flex-column">
        <div id="title" className="flex-center">
          <h1>Search for books</h1>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
