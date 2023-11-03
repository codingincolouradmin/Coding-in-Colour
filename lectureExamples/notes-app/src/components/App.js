import { useState } from 'react';
import Notes from './Notes';
import Input from './Input';

function App() {
  const [x, setX] = useState([
    "Hello from France",
    "Hello from Canada"
  ]);
  const [y, setY] = useState("");

  const updateInput = (e) => {
    e.preventDefault(); // Standard Practice
    const newValue = e.target.value;
    setY(newValue);
  }

  const addNote = (e) => {
    e.preventDefault() // Standard Practice
    const updatedArray = [...x, y];
    setX(updatedArray);
    setY('');

  }

  return (
    <div className="App">
      <Notes notes={x} />
      <Input fieldInput={y} update={updateInput}
             clickAction={addNote}/>
    </div>
  );
}

export default App;