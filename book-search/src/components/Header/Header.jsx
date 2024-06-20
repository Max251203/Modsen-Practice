import React from "react";
import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";

export default function Header({ onFormChange, formState }) {
  return (
    <header>
      <div id="title" className="flex-center">
        <h1>Search for books</h1>
      </div>
      <SearchForm onFormChange={onFormChange} formState={formState} />
    </header>
  );
}
