import React from "react";
import { Link } from "react-router-dom";
import coverImg from "images/no_cover.jpg";
import "books/BookList/BookList.css";
import BookImage from "books/BookImage";
import BookInfo from "books/BookInfo";

const Book = ({ book }) => {
  const { id, title, authors, categories, thumbnail } = book;

  return (
    <Link to={`/book/${id}`} state={{ book }}>
      <div className="book-item flex flex-column flex-sb">
        <BookImage
          thumbnail={thumbnail}
          title={title}
          coverImg={coverImg}
          className={"book-item-img"}
        />
        <BookInfo
          title={title}
          authors={authors}
          categories={categories}
          boxClass={"book-item-info text-center"}
          itemDivClass={"book-item-info-item category fs-15"}
          itemSpanClass={"text-capitalize fw-7"}
        />
      </div>
    </Link>
  );
};

export default Book;
