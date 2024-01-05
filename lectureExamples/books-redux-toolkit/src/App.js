import "./App.css";
import Books from "./components/Books";
import Authors from "./components/Authors";

import { useSelector, useDispatch } from "react-redux";
import { selectBooks, assignAuthor } from "./features/booksSlice";
import { selectAuthors } from "./features/authorsSlice";
import { updateAssignAuthor } from "./services/bookService";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const authors = useSelector(selectAuthors);

  const handleAssignAuthor = async (bookId, authorId) => {
    try {
      const updatedItem = await updateAssignAuthor(bookId, authorId);
      const bId = updatedItem.id;
      const aId = updatedItem.authorId;
      const payload = { bId, aId };
      console.log(payload);
      dispatch(assignAuthor(payload));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Books />
      <hr />
      <Authors />
      <hr />
      <h3>Assign author to book</h3>
      {books.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <select onChange={(e) => handleAssignAuthor(book.id, e.target.value)}>
            <option value="">Select Author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default App;
