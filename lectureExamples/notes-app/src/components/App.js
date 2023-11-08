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
    { id: 1, text: "Whats up", color: "brown-sugar", heartCount: 0 , title:"first",author:"James Bond"},
    { id: 2, text: "How are you", color: "phlox", heartCount: 0 , title:"second", author:"Ronaldo"},
  ]);

  const [prevNote, setPrevNote] = useState(""); // new input text state
  const [inputSearch, setInputSearch] = useState(""); // new input text state
  const [inputTitle, setInputTitle] = useState(""); // new input text state
  const [inputText, setInputText] = useState(""); // new input text state
  const [inputAuthor, setInputAuthor] = useState(""); // new input text state
  const [inputColor, setInputColor] = useState("atomic-tangerine"); // new input color state (default is atomic tangerine)
  const [show, setShow] = useState(false); // add new note input field show state
  const [show2, setShow2] = useState(false); // add new note input field show state
  const [show3, setShow3] = useState(false); // add new note input field show state
  useEffect(() => {
    // Run this code here
    // We need to check if we even have our notes in localStorage
    if (localStorage.getItem("notes")) {
      // If we do, we grab what we need, and update our notes (setNotes)
      const storedNotes = JSON.parse(localStorage.getItem("notes"));
      setNotes(storedNotes);
    } else {
      console.log("Our local storage is empty!");
    }
  }, []);

  // whenever search is selected the unpdate inputSearch state
  const updateSearchInput = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setInputSearch(newValue);
  };

  // whenever title is selected the unpdate inputTitle state
  const updateTextTitle = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setInputTitle(newValue);
  };

  // whenever I update input field then update inputText state
  const updateTextInput = (e) => {
    e.preventDefault(); // Standard Practice
    const newValue = e.target.value;
    setInputText(newValue);
  };
  // whenever author is selected the unpdate inputAuthor state
  const updateTextAuthor = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setInputAuthor(newValue);
  };

  // whenever a color is selected the unpdate inputColor state
  const updateColorInput = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setInputColor(newValue);
  };

  // whenever "save" button is clicked, then update notes with new note object
  const addNote = (e) => {
    const newUniqueID = uuidv4();
    console.log(newUniqueID);
    e.preventDefault(); // Standard Practice
    const newNote = {
      id: newUniqueID,
      title:inputTitle,
      text: inputText,
      author:inputAuthor,
      color: inputColor,
      heartCount: 0,
    }; // Creating a new note
    const updatedArray = [...notes, newNote]; // Creating a new notes array with note added
    setNotes(updatedArray); // Updating our notes
    setPrevNote(updatedArray); //Saving previous notes
    localStorage.setItem("notes", JSON.stringify(updatedArray)); // Put our notes in localstorage
    setInputText(""); // Updating our text input
    setShow(false); // Hide our input
  };

  // update heartCount when clicking the heart icon of each note
  const updateCount = (e, id) => {
    e.preventDefault();

    // find the index of the clicked note inside notes state
    const index = notes.findIndex((note) => note.id === id);

    // increase count of clicked note
    const updatedNotes = [...notes];
    updatedNotes[index] = {
      ...updatedNotes[index],
      heartCount: updatedNotes[index].heartCount + 1,
    };

    // updating notes state
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  // sort notes based on heartCount
  const sortNotes = (e) => {
    e.preventDefault();

    const sortedData = [...notes].sort((a, b) => b.heartCount - a.heartCount);

    setNotes(sortedData);
    localStorage.setItem("notes", JSON.stringify(sortedData));
  };

  // search notes 
  const searchedNotes = (e) => {
    e.preventDefault();

   let searchedData = notes.filter(function(note){
    return note.title === inputSearch;
   })

    setNotes(searchedData);
    localStorage.setItem("notes", JSON.stringify(searchedData));
  };

  // previous notes 
  const previousNotes = (e) => {
    e.preventDefault();

   

    setNotes(prevNote);
    localStorage.setItem("notes", JSON.stringify(prevNote));
  };

  
  
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Notes app</h1>
      <div className="my-notes">
        <br />
        
        {/* notes component: list all notes */}
        <Notes notes={notes} updateCount={updateCount} />
      </div>
      <div className="hiddenDiv">
        {/* toggle add new note */}
        
        <div className="hoveredSearch">
          {show3 && (
            // adding new note form
            (<input value={inputSearch} onChange={updateSearchInput}/>)
          
          
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
            title={inputTitle}
            handleUpdateTitle={updateTextTitle}
            text={inputText}
            handleUpdateText={updateTextInput}
            author={inputAuthor}
            handleUpdateAuthor={updateTextAuthor}
            color={inputColor}
            handleUpdateColor={updateColorInput}
            handleAddNote={addNote}
          />
        )}
      </div>

      
     
      
      {
        show && <HiSortDescending className="add-circle2" onClick={sortNotes} />
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
