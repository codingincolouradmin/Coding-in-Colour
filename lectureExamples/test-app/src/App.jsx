import Notes from "./Notes";
import { useState } from "react";
import NoteForm from "./NoteForm";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Note 1",
      content: "This is the content of Note 1.",
      important: true,
    },
    {
      title: "Note 2",
      content: "This is the content of Note 2.",
      important: false,
    },
    {
      title: "Note 3",
      content: "This is the content of Note 3.",
      important: true,
    },
  ]);

  const createNote = (newNote) => {
    setNotes([...notes,newNote]);
  }

  const toggleImportance = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = {
      ...updatedNotes[index],
      important: !updatedNotes[index].important,
    };
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <NoteForm createNote={createNote}/>
      <Notes notes={notes} toggleImportance={toggleImportance} />
    </div>
  );
}

export default App;
