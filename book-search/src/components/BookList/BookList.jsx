import React from "react";
import "./BookList.css";

export default function BookList({ books, totalBooks }) {
  return (
    <div id="searchResult">
      {books.length > 0 ? (
        <>
          <p>Found {totalBooks} books</p>
          <div className="bookListContainer">
            {books.map((book, index) => (
              <div key={`${book.id}-${index}`} className="bookCard">
                <div className="bookCardImageContainer">
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                </div>
                <div className="bookCardContent">
                  <h3>{book.volumeInfo.title}</h3>
                  <p>Category: {book.volumeInfo.categories?.[0]}</p>
                  <p>Authors: {book.volumeInfo.authors?.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}
