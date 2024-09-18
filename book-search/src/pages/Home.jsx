import React, { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Header/Header";
import { searchBooks, MAPPED_BOOKS } from "@constants/api";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [queryParams, setQueryParams] = useState({});

  const fetchBooks = async (query, category, sort, startIndex = 0) => {
    setLoading(true);
    try {
      const data = await searchBooks(query, category, sort, startIndex);
      setBooks((prevBooks) => [
        ...prevBooks,
        ...MAPPED_BOOKS(data.items || []),
      ]);

      if (startIndex === 0) {
        setTotalItems(data.totalItems);
      }

      setStartIndex(startIndex + 30);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback((query, category, sort) => {
    setQueryParams({ query, category, sort });
    setBooks([]);
    setStartIndex(0);
    fetchBooks(query, category, sort);
  }, []);

  const handleLoadMore = useCallback(() => {
    const { query, category, sort } = queryParams;
    fetchBooks(query, category, sort, startIndex);
  }, [queryParams, startIndex]);

  return (
    <main>
      <Header onSearch={handleSearch} />
      {/* Outlet для рендеринга BookList или BookDetails */}
      <Outlet context={{ books, loading, totalItems, handleLoadMore }} />
    </main>
  );
};

export default Home;
