export const API_KEY = "AIzaSyCI_B28-8QZokqkrYuq-nwnG1NzXL9E6g8";
export const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const REQUEST = (searchParams, startIndex) => {
    return `${BASE_URL}?q=${searchParams.searchTerm}${
      searchParams.category !== "all"
        ? `+subject:${searchParams.category}`
        : ""
    }&orderBy=${
      searchParams.sortBy
    }&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`;
};
  
export const MAPPED_BOOKS = (items) => {
    return items.map((book) => ({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || [],
      categories: book.volumeInfo.categories || [],
      thumbnail: book.volumeInfo.imageLinks?.thumbnail || '',
      description: book.volumeInfo.description || '',
    }));
  };