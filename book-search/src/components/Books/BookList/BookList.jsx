import React from "react";
import { useGlobalContext } from "@/context";
import Book from "books/Book";
import Loading from "components/Loader/Loader";
import "./BookList.css";

const BookList = () => {
  const { books, loading, totalItems, loadMoreBooks } = useGlobalContext();

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>Найдено книг: {totalItems}</h2>
        </div>
        <div className="booklist-content grid">
          {books.map((book, index) => (
            <Book key={`${book.id}-${index}`} book={book} />
          ))}
        </div>
        <div className="load-more">
          <button onClick={loadMoreBooks}>Load more</button>
        </div>
      </div>
    </section>
  );
};

export default BookList;
