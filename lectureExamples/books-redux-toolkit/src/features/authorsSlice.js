import { createSlice } from "@reduxjs/toolkit";

const authorsSlice = createSlice({
  name: "authors",
  initialState: {
    authors: [],
  },
  reducers: {
    addAuthor: (state, action) => {
      state.authors.push(action.payload);
    },
    setAuthors: (state, action) => {
      state.authors = action.payload;
    },
    deleteAuthor: (state, action) => {
      const authorId = action.payload;
      state.authors = state.authors.filter((author) => author.id !== authorId);
    },
  },
});

export const { addAuthor, setAuthors, deleteAuthor } = authorsSlice.actions;
export const selectAuthors = (state) => state.authors.authors;

export default authorsSlice.reducer;
