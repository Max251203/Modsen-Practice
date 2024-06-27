import React from "react";
import { useGlobalContext } from "../../context";
import Book from "./Book";
import Loading from "../Loader/Loader";
import "./BookList.css";

const BookList = () => {
  const { books, loading, totalItems, loadMoreBooks } = useGlobalContext();

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>Found {totalItems} books</h2>
        </div>
        <div className="booklist-content grid">
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
        <div className="load-more">
          <button onClick={loadMoreBooks}>Load More</button>
        </div>
      </div>
    </section>
  );
};

export default BookList;
