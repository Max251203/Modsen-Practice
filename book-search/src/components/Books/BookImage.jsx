import React from "react";
import "books/BookList/BookList.css";

const BookImage = ({ thumbnail, title, coverImg, className }) => {
  return (
    <div className={`${className}`}>
      <img src={thumbnail || coverImg} alt={title} />
    </div>
  );
};

export default BookImage;
