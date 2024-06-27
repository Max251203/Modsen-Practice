import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { API_KEY, BASE_URL } from "./constants/apiConstatnts";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const fetchBooks = useCallback(async () => {
    setBooks([]);
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}?q=${searchTerm}${
          category !== "all" ? `+subject:${category}` : ""
        }
        &orderBy=${sortBy}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
      );
      const data = await response.json();
      const { items, totalItems: total } = data;

      if (items) {
        const newBooks = items.map((book) => ({
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors || [],
          categories: book.volumeInfo.categories || [],
          thumbnail: book.volumeInfo.imageLinks?.thumbnail || "",
          description: book.volumeInfo.description || "",
        }));

        setBooks(newBooks);
        setTotalItems(total);
      } else {
        setTotalItems(0);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm, category, sortBy, startIndex]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setBooks([]);
      setStartIndex(0);
      fetchBooks();
    }
  }, [searchTerm, category, sortBy, fetchBooks]);

  const loadMoreBooks = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + 30);
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
        sortBy,
        setSortBy,
        books,
        setBooks,
        loading,
        totalItems,
        setTotalItems,
        loadMoreBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
