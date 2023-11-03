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

  return (
    <div className="App">
      <Notes notes={x} />
      <Input fieldInput={y} update={updateInput}/>
    </div>
  );
}

export default App;