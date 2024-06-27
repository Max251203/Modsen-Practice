import React from "react";
import { Link } from "react-router-dom";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const Book = ({ book }) => {
  const { id, title, authors, categories, thumbnail } = book;

  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={thumbnail || coverImg} alt={title} />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${id}`} state={{ book }}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{title}</span>
          </div>
        </Link>

        <div className="book-item-info-item category fs-15">
          <span className="text-capitalize fw-7">Category: </span>
          <span>{categories[0] || ""}</span>
        </div>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Authors: </span>
          <span>{authors.join(", ") || ""}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
