import { useState } from 'react';
import { IoIosMore, IoIosSearch } from "react-icons/io";
import { HiSortDescending } from "react-icons/hi";

function Input({ noteTitle, noteContent, noteAuthor, noteColor, noteSearch,
  updateTitle, updateContent, updateAuthor, updateColor, updateSearch,
  addNote,
  sorted, handleSort }) {
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Handlers for showing adding note, searching note
  const handleShow = () => {
    // When we close our 'show' it makes sense to get rid of the input fields
    setShow(!show);
    setShowAdd(false);
    setShowSearch(false);
    console.log('we are clicking!');
  }

  const handleShowAdd = () => {
    // If we're opening the show Add, we probably want to make sure other stuff is closed
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

  return (
    <div className='noteInput'>
      <IoIosMore className="add-circle" onClick={handleShow}/>
      {show && 
        <div className="hiddenDiv">
          <HiSortDescending className="add-circle2" onClick={handleSort}/>
        </div>
      }
    </div>
    // <div className="noteInput">
    //   <input value={noteTitle} onChange={updateTitle} placeholder="Title"/>
    //   <br />
    //   <input value={noteContent} onChange={updateContent} placeholder="Note"/>
    //   <br />
    //   <input value={noteAuthor} onChange={updateAuthor} placeholder="Author" />
    //   <br />
    //   <select value={noteColor} onChange={updateColor}>
    //     <option value="">select color</option>
    //     <option value="brown-sugar">brown</option>
    //     <option value="atomic-tangerine">tangerine</option>
    //     <option value="cadet-gray">grey</option>
    //     <option value="phlox">purple</option>
    //     <option value="tea-green">green</option>
    //   </select>
    //   <br />
    //   <button onClick={addNote}>Save</button>
    // </div>
  );
}

export default Input;
