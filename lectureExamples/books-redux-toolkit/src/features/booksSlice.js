import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    deleteBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    assignAuthor: (state, action) => {
      const { bookId, authorId } = action.payload;
      const book = state.books.find((b) => b.id === bookId);
      if (book) {
        book.authorId = authorId;
      }
    },
  },
});

export const { addBook, setBooks, deleteBook, assignAuthor } =
  booksSlice.actions;
export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;
