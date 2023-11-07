import "../styles/App.css";

import { useState } from "react";
import Notes from "./Notes";
import Input from "./Input";
import { IoIosAdd } from "react-icons/io";

function App() {
  console.log('We are re-rendering'); // This is going to print to console, every time this component re-renders
  // all notes state
  const [notes, setNotes] = useState([
    { text: "Whats up", color: "brown-sugar" },
    { text: "How are you", color: "phlox" },
  ]);
  const [inputText, setInputText] = useState("");                     // new input text state
  const [inputColor, setInputColor] = useState("atomic-tangerine");   // new input color state (default is atomic tangerine)
  const [show, setShow] = useState(false);                            // add new note input field show state

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
    e.preventDefault();                                                 // Standard Practice
    const newNote = { text: inputText, color: inputColor };             // Creating a new note
    const updatedArray = [...notes, newNote];                           // Creating a new notes array with note added
    setNotes(updatedArray);                                             // Updating our notes
    setInputText("");                                                   // Updating our text input
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Notes app</h1>
      <div className="my-notes">
        {/* notes component: list all notes */}
        <Notes notes={notes} />
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
