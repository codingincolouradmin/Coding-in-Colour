import "../styles/App.css";
import { useState, useEffect } from "react";
import Notes from "./Notes";
import Input from "./Input";
import { IoIosAdd, IoIosMore, IoIosSearch } from "react-icons/io";
import { HiSortDescending } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

function App() {
  
  // all notes state
  const [notes, setNotes] = useState([
    { id: 1, content: "Whats up", color: "brown-sugar", heartCount: 0 , title:"first", author:"James Bond"},
    { id: 2, content: "How are you", color: "phlox", heartCount: 0 , title:"second",  author:"Ronaldo"},
  ]);

  // state needed to handle user input for a note
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [noteAuthor, setNoteAuthor] = useState("");
  const [noteColor, setNoteColor] = useState("atomic-tangerine");

  // state needed to search for a note
  const [noteSearch, setNoteSearch] = useState("");

  // state needed to handle whether or not we want to sort
  const [sorted, setSorted] = useState(false);
  
  // Will be adjusted later
  const [show, setShow] = useState(false); // add new note input field show state
  const [show2, setShow2] = useState(false); // add new note input field show state
  const [show3, setShow3] = useState(false); // add new note input field show state
  
  // Functions to handle updating our inputs for creating a new note
  const updateTitle = (e) => {
    e.preventDefault();
    const newTitle = e.target.value;
    setNoteTitle(newTitle);
  }
  const updateContent = (e) => {
    e.preventDefault();
    const newContent = e.target.value;
    setNoteContent(newContent);
  }
  const updateAuthor = (e) => {
    e.preventDefault();
    const newAuthor = e.target.value;
    setNoteAuthor(newAuthor);
  }
  const updateColor = (e) => {
    e.preventDefault();
    const newColor = e.target.value;
    setNoteColor(newColor);
  }

  // whenever search is selected the unpdate inputSearch state
  const updateSearchInput = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setNoteSearch(search);
  };
  
  // handle sorting our notes
  const handleSort = (e) => {
    e.preventDefault();
    setSorted(!sorted);
  };

  // handle adding our note
  const addNote = (e) => {
    e.preventDefault(); // Standard Practice
    const newUniqueID = uuidv4(); // Get a unique id
    // Creating a new note
    const newNote = {
      id: newUniqueID,
      title:noteTitle,
      text: noteContent,
      author:noteAuthor,
      color: noteColor,
      heartCount: 0,
    }; 
    const updatedArray = [...notes, newNote]; // Creating a new notes array with note added
    setNotes(updatedArray); // Updating our notes
    // setPrevNote(updatedArray); //Saving previous notes
    // setInputText(""); // Updating our text input
    setShow(false); // Hide our input
  };

  // update heartCount when clicking the heart icon of each note
  const updateCount = (e, id) => {
    e.preventDefault();
    const index = notes.findIndex((note) => note.id === id); // find the index of note
    const updatedNotes = [...notes];   // make a copy of all our notes
    updatedNotes[index] = {
      ...updatedNotes[index],
      heartCount: updatedNotes[index].heartCount + 1,
    };  // update that copy with our updated note
    setNotes(updatedNotes); // update our notes state
  };


  // search notes 
  const searchedNotes = (e) => {
    e.preventDefault();

  //  let searchedData = notes.filter(function(note){
  //   return note.title === inputSearch;
  //  })

  //   setNotes(searchedData);
  };

  // previous notes 
  const previousNotes = (e) => {
    e.preventDefault();

   

    // setNotes(prevNote);
  };

  
  
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Notes app</h1>
      <div className="my-notes">
        <br />
        
        {/* notes component: list all notes */}
        <Notes notes={notes} updateCount={updateCount} search={noteSearch} sorted={sorted} />
      </div>
      <div className="hiddenDiv">
        {/* toggle add new note */}
        
        <div className="hoveredSearch">
          {show3 && (
            // adding new note form
            (<input value={noteSearch} onChange={updateSearchInput}/>)
          
          
          )}
          {show3 && (
            // adding new note form
          
            (<div>
              <button onClick={searchedNotes}>Search</button>
              <button onClick={previousNotes}>Refresh</button>
            </div>)
          
          )}
        </div>
        
        {show2 && (
          // adding new note form
          <Input
            title={noteTitle}
            handleUpdateTitle={updateTitle}
            text={noteContent}
            handleUpdateText={updateContent}
            author={noteAuthor}
            handleUpdateAuthor={updateAuthor}
            color={noteColor}
            handleUpdateColor={updateColor}
            handleAddNote={addNote}
          />
        )}
      </div>

      
     
      
      {
        show && <HiSortDescending className="add-circle2" onClick={handleSort} />
      }
      {
        show &&  <IoIosSearch className="add-circle1" onClick={() => setShow3(!show3)} />
      }
      {
        show && <IoIosAdd className="add-circle" onClick={() => setShow2(!show2)} />
      }
      <IoIosMore className="add-circle3" onClick={() => setShow(!show)} />
    </div>
  );
}

export default App;
