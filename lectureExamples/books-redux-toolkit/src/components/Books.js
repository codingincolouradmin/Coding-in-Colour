import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addBook,
  selectBooks,
  setBooks,
  deleteBook,
} from "../features/booksSlice";
import { selectAuthors } from "../features/authorsSlice";

import { fetchData, sendData, deleteData } from "../services/bookService";

function Books() {
  const books = useSelector(selectBooks);
  const authors = useSelector(selectAuthors);
  const dispatch = useDispatch();

  // handl get all books from API then pass it to the sate
  useEffect(() => {
    try {
      fetchData().then((response) => dispatch(setBooks(response)));
      console.log("fetch data on each dispatch");
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  // handle add new book from API then to state
  const handleAddBook = async (title) => {
    try {
      const payload = await sendData(title);
      dispatch(addBook(payload));
    } catch (error) {
      console.log(error);
    }
  };

  // handle delete book. Return the deleted item fro confirmation then delete from sate..
  async function handleDelete(id) {
    try {
      const deletedItem = await deleteData(id);
      console.log(deletedItem);
      dispatch(deleteBook(deletedItem.id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>books list</h2>

      <ul>
        {" "}
        {books.map((book) => (
          <li key={book.id}>
            <p>{book.title}</p>
            <p>AuthorName: </p>
            {book.authorId
              ? authors.find((author) => author.id === book.authorId).name
              : "no author"}
            <button onClick={(e) => handleDelete(book.id)}>delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add book"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddBook(e.target.value);
            e.target.value = "";
          }
        }}
      />
      {/* add new book */}
    </>
  );
}

export default Books;
