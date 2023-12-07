import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addAuthor,
  selectAuthors,
  setAuthors,
  deleteAuthor,
} from "../features/authorsSlice";

import { fetchData, sendData, deleteData } from "../services/authorService";

function Authors() {
  const authors = useSelector(selectAuthors);
  const dispatch = useDispatch();

  // handl get all authors from API then pass it to the sate
  useEffect(() => {
    try {
      fetchData().then((response) => dispatch(setAuthors(response)));
      console.log("fetch data on each dispatch");
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  // handle add new author from API then to state
  const handleAddAuthor = async (name) => {
    try {
      const payload = await sendData(name);
      dispatch(addAuthor(payload));
    } catch (error) {
      console.log(error);
    }
  };

  // handle delete author. Return the deleted item fro confirmation then delete from sate..
  async function handleDelete(id) {
    try {
      const deletedItem = await deleteData(id);
      console.log(deletedItem);
      dispatch(deleteAuthor(deletedItem.id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>authors list</h2>

      <ul>
        {" "}
        {authors.map((author) => (
          <li key={author.id}>
            <p>{author.name}</p>
            <button onClick={(e) => handleDelete(author.id)}>delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add author"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddAuthor(e.target.value);
            e.target.value = "";
          }
        }}
      />
      {/* add new author */}
    </>
  );
}

export default Authors;
