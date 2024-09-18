import React from "react";
import { useOutletContext } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import Loader from "@components/Loader/Loader";
import "./BookList.css";

const BookList = () => {
  const { books, loading, totalItems, handleLoadMore } = useOutletContext();

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>Найдено книг: {totalItems}</h2>
        </div>
        {loading && <Loader />}
        <div className="booklist-content grid">
          {books.map((book, index) => (
            <BookCard key={`${book.id}-${index}`} book={book} />
          ))}
        </div>
        <button
          id="loadMoreButton"
          className="flex flex-c fs-18 fw-5"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      </div>
    </section>
  );
};

export default BookList;
