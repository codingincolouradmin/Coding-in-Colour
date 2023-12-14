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
      const { bId, aId } = action.payload;
      const book = state.books.find((b) => b.id === bId);
      if (book) {
        book.authorId = aId;
      }
    },
  },
});

export const { addBook, setBooks, deleteBook, assignAuthor } =
  booksSlice.actions;
export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;
