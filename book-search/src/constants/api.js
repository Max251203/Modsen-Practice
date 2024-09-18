import axios from 'axios';

const API_KEY = 'AIzaSyCI_B28-8QZokqkrYuq-nwnG1NzXL9E6g8';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = async (query, category, sort, startIndex = 0) => {
  const categoryFilter = category !== 'all' ? `+subject:${category}` : '';
  const url = `${BASE_URL}?q=${query}${categoryFilter}&orderBy=${sort}&startIndex=${startIndex}&maxResults=30&key=${API_KEY}`;
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
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