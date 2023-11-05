import { useState } from 'react';
import Notes from './Notes';
import Input from './Input';

function App() {
  const [notes, setNotes] = useState([
    "Hello from France",
    "Hello from Canada"
  ]);
  const [inputText, setInputText] = useState("");

  const updateTextInput = (e) => {
    e.preventDefault(); // Standard Practice
    const newValue = e.target.value;
    setInputText(newValue);
  }

  const addNote = (e) => {
    e.preventDefault() // Standard Practice
    const updatedArray = [...notes, inputText];
    setNotes(updatedArray);
    setInputText('');

  }

  return (
    <div className="App">
      <Notes notes={notes} />
      <Input text={inputText} handleUpdateText={updateTextInput}
             handleAddNote={addNote}/>
    </div>
  );
}

export default App;