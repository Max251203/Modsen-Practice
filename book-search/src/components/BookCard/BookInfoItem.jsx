import React from "react";

const BookInfoItem = ({ label, value, divClass, spanClass }) => {
  return (
    <div className={`${divClass}`}>
      <span className={`${spanClass}`}>{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default BookInfoItem;
