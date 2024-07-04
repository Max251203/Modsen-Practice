import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { REQUEST, MAPPED_BOOKS } from "constants/apiConstatnts";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    searchTerm: "",
    category: "all",
    sortBy: "relevance",
  });
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(REQUEST(searchParams, startIndex));
      const data = await response.json();
      const { items, totalItems: total } = data;

      if (items) {
        setBooks((prevBooks) => [...prevBooks, ...MAPPED_BOOKS(items)]);
        setTotalItems(total);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  }, [searchParams, startIndex]);

  useEffect(() => {
    if (searchParams.searchTerm.trim() !== "") {
      setBooks([]);
      setTotalItems(0);
      setStartIndex(0);
      fetchBooks();
    }
  }, [searchParams.searchTerm, fetchBooks]);

  const loadMoreBooks = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + 30);
  };

  return (
    <AppContext.Provider
      value={{
        searchParams,
        setSearchParams,
        books,
        loading,
        totalItems,
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
