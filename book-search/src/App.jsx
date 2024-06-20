import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./components/BookList/BookList";
import Header from "./components/Header/Header";

const API_KEY = "AIzaSyCI_B28-8QZokqkrYuq-nwnG1NzXL9E6g8";
const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export default function App() {
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [formState, setFormState] = useState({
    query: "react",
    filter: "all",
    sort: "relevance",
  });

  useEffect(() => {
    fetchBooks();
  }, [formState]);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}?q=${formState.query || "react"}${
          formState.filter !== "all" ? `+subject:${formState.filter}` : ""
        }&orderBy=${
          formState.sort
        }&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
      );

      if (response.data.items) {
        setBooks((prevBooks) => [...prevBooks, ...response.data.items]);
        setTotalBooks(response.data.totalItems);
        setStartIndex(startIndex + 30);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (newFormState) => {
    setFormState(newFormState);
    setBooks([]);
    setStartIndex(0);
    setTotalBooks(0);
  };

  return (
    <>
      <Header onFormChange={handleFormChange} formState={formState} />
      <main>
        {loading && <p>Loading...</p>}
        <BookList books={books} totalBooks={totalBooks} />
        <button
          onClick={() => {
            fetchBooks();
          }}
        >
          Load More
        </button>
      </main>
    </>
  );
}
