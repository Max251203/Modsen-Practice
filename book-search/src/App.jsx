import React, { useState } from "react";
import axios from "axios";
import BookList from "./components/BookList/BookList";
import Header from "./components/Header/Header";

const API_KEY = "AIzaSyCI_B28-8QZokqkrYuq-nwnG1NzXL9E6g8";
const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export default function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("react");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("relevance");
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}?q=${query || "react"}${
          filter !== "all" ? `+subject:${filter}` : ""
        }${
          sort === "newest" ? "&orderBy=newest" : ""
        }&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
      );

      if (response.data.items) {
        setBooks((prevBooks) => [...prevBooks, ...response.data.items]);
        setStartIndex(startIndex + 30);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setQuery(query);
    setBooks([]);
    setStartIndex(0);
    fetchBooks();
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
    setBooks([]);
    setStartIndex(0);
    fetchBooks();
  };

  const handleSortChange = (sort) => {
    setSort(sort);
    setBooks([]);
    setStartIndex(0);
    fetchBooks();
  };

  const handleLoadMore = () => {
    fetchBooks();
  };

  return (
    <>
      <Header
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      {loading && <p>Loading...</p>}
      {console.log(books.length)}
      <BookList books={books} />
      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
}
