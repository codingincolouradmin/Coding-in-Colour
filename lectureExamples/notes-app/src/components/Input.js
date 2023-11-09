import { useState } from 'react';
import { IoIosMore, IoIosSearch } from "react-icons/io";
import { HiSortDescending } from "react-icons/hi";
import AddNote from './AddNote';

function Input({ noteTitle, noteContent, noteAuthor, noteColor, noteSearch,
  updateTitle, updateContent, updateAuthor, updateColor, updateSearch,
  addNote,
  sorted, handleSort }) {
  const [show, setShow] = useState(false);                // Show or hide the add/search/sort
  const [showAdd, setShowAdd] = useState(false);          // Show or hide the add
  const [showSearch, setShowSearch] = useState(false);    // Show or hide the add

  // Handlers for showing adding note, searching note
  const handleShow = () => {
    // When we close our 'show' it makes sense to get rid of the input fields
    setShow(!show);
    setShowAdd(false);
    setShowSearch(false);
  }

  const handleShowAdd = () => {
    // If we're opening the show Add, we probably want to make sure other stuff is closed
    console.log('clicked');
    if (!showAdd) {
      setShowSearch(false);
    }
    setShowAdd(!showAdd);
  }

  const handleShowSearch = () => {
    // If we're opening the show search, we probably want to make sure other stuff is closed
    if (!showSearch) {
      setShowAdd(false);
    }
    setShowSearch(!showSearch);
  }

  const addNoteProps = {
    noteTitle, noteContent, noteAuthor, noteColor,
    updateTitle, updateContent, updateAuthor, updateColor,
    addNote,
    showAdd, handleShowAdd
  }

  return (
    <div className='Input'>
      <IoIosMore className="add-circle" onClick={handleShow}/>
      {show &&
          <div className="hiddenDiv">
             <AddNote {...addNoteProps} />
             <HiSortDescending className="add-circle2" onClick={handleSort} />
          </div>
      }
    </div>
  );
}

export default Input;
