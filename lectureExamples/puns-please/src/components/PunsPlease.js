import PunsDisplay from "./PunsDisplay";
import { useState, useEffect } from 'react';

function PunsPlease() {
  const [puns, setPuns] = useState([]); // Keeps track of all our puns
  // keep track of what the user is typing into the pun inputs
  const [pun, setPun] = useState({
    pun: '',
    author: '',
    likes: 0
  });
  // keep track of what the user is typing into the feedback inputs
  const [feedback, setFeedback] = useState({
    name: '',
    message: '',
  });

  return (
    <div className="App">
      Hello, Students ^_^
      <h2>Puns Please App</h2>
      <PunsDisplay />
    </div>
  );
}

export default PunsPlease;
