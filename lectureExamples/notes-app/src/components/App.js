import { useState } from 'react';
import Notes from './Notes';

function App() {
  const [notes, setNotes] = useState([
    "I like bananas",
    "I like banana bread",
    "Hello from Canada"
  ]);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Notes notes={notes}/>
    </div>
  );
}

export default App;
