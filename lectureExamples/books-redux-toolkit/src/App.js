import "./App.css";
import Books from "./components/Books";
import Authors from "./components/Authors";

import { useSelector, useDispatch } from "react-redux";
import { selectBooks, assignAuthor } from "./features/booksSlice";
import { selectAuthors } from "./features/authorsSlice";

function App() {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const authors = useSelector(selectAuthors);

  const handleAssignAuthor = (bookId, authorId) => {
    const payload = { bookId, authorId };
    dispatch(assignAuthor(payload));
  };

  return (
    <div className="App">
      <Books />
      <hr />
      <Authors />
      <hr />
      <h3>Aissign author to book</h3>
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
