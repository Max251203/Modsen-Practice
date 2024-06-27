import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div id="title" className="flex-center">
        <h1>Search for books</h1>
      </div>
      <div id="searchBox">
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
