import { useState } from "react";
import Notes from "./Notes";
import Input from "./Input";

import { IoIosAdd } from "react-icons/io";

function App() {
  // all notes state
  const [notes, setNotes] = useState([
    { text: "Whats up", color: "yellow" },
    { text: "How are you", color: "green" },
  ]);
  // new input text state
  const [inputText, setInputText] = useState("");
  // new input color state
  const [inputColor, setInputColor] = useState("red");
  // add new note input field show state
  const [show, setShow] = useState(false);

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
    e.preventDefault(); // Standard Practice
    const singleOb = { text: inputText, color: inputColor };
    const updatedArray = [...notes, singleOb];
    setNotes(updatedArray);
    setInputText("");
  };

  return (
    <div className="rootDiv">
      <h1 style={{ textAlign: "center" }}>Notes app</h1>
      <div>
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

      <IoIosAdd className="circ" onClick={() => setShow(!show)} />
    </div>
  );
}

export default App;
