import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { API_KEY, BASE_URL } from "./constants/apiConstatnts";

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
      const response = await fetch(
        `${BASE_URL}?q=${searchParams.searchTerm}${
          searchParams.category !== "all"
            ? `+subject:${searchParams.category}`
            : ""
        }
        &orderBy=${
          searchParams.sortBy
        }&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`
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

        setBooks((prevBooks) => [...prevBooks, ...newBooks]);
        setTotalItems(total);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchParams, startIndex]);

  useEffect(() => {
    if (searchParams.searchTerm.trim() !== "") {
      setBooks([]);
      setStartIndex(0);
      fetchBooks();
    }
  }, [searchParams, fetchBooks]);

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
