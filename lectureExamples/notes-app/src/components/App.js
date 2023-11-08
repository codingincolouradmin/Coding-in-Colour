import "../styles/App.css";

import { useState, useEffect } from "react";
import Notes from "./Notes";
import Input from "./Input";
import { IoIosAdd } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

function App() {
  // all notes state
  const [notes, setNotes] = useState([
    { id: 1, text: "Whats up", color: "brown-sugar", heartCount: 0 },
    { id: 2, text: "How are you", color: "phlox", heartCount: 0 },
  ]);

  const [inputText, setInputText] = useState(""); // new input text state
  const [inputColor, setInputColor] = useState("atomic-tangerine"); // new input color state (default is atomic tangerine)
  const [show, setShow] = useState(false); // add new note input field show state
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

  // whenever I update input field then update inputText state
  const updateTextInput = (e) => {
    e.preventDefault(); // Standard Practice
    const newValue = e.target.value;
    setInputText(newValue);
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
      text: inputText,
      color: inputColor,
      heartCount: 0,
    }; // Creating a new note
    const updatedArray = [...notes, newNote]; // Creating a new notes array with note added
    setNotes(updatedArray); // Updating our notes
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

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Notes app</h1>
      <div className="my-notes">
        <br />
        <button onClick={sortNotes}>Sort</button>
        <br />
        {/* notes component: list all notes */}
        <Notes notes={notes} updateCount={updateCount} />
      </div>
      <div className="hiddenDiv">
        {/* toggle add new note */}
        {show && (
          // adding new note form
          <Input
            text={inputText}
            handleUpdateText={updateTextInput}
            color={inputColor}
            handleUpdateColor={updateColorInput}
            handleAddNote={addNote}
          />
        )}
      </div>

      <IoIosAdd className="add-circle" onClick={() => setShow(!show)} />
    </div>
  );
}

export default App;
