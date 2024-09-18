import React from "react";
import BookInfoItem from "./BookInfoItem";

const BookInfo = ({
  title,
  authors,
  categories,
  description,
  boxClass,
  itemDivClass,
  itemSpanClass,
}) => {
  return (
    <div className={boxClass}>
      <BookInfoItem
        label="Название: "
        value={title}
        divClass={itemDivClass}
        spanClass={itemSpanClass}
      />
      <BookInfoItem
        label="Авторы: "
        value={authors?.join(", ")}
        divClass={itemDivClass}
        spanClass={itemSpanClass}
      />
      <BookInfoItem
        label="Категории: "
        value={categories?.join(", ")}
        divClass={itemDivClass}
        spanClass={itemSpanClass}
      />
      {description && (
        <BookInfoItem
          label="Описание: "
          value={description}
          divClass={itemDivClass}
          spanClass={itemSpanClass}
        />
      )}
    </div>
  );
};

export default BookInfo;
