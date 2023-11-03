import { useState } from 'react';
import Notes from './Notes';
import Input from './Input';

function App() {
  const [x, setX] = useState([
    "Hello from France",
    "Hello from Canada"
  ]);
  const [y, setY] = useState("");

  return (
    <div className="App">
      <Notes notes={x} />
      <Input />
    </div>
  );
}

export default App;