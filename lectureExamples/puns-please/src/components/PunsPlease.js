import Display from "./Display";
import { useState, useEffect } from 'react';

function PunsPlease() {
  const [puns, setPuns] = useState([
    {
      id: "1",
      pun: "What did the bread say to the baker? You knead me.",
      author: "anonymous",
      likes: 10
   }
   
  ]); // Keeps track of all our puns
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

  useEffect(() => {
    console.log('hello');
  }, [])

  const handleDeletePun = (e, id) => {
    // TODO
    console.log('Clicked delete on ', id);
  }

  const handleLikePun = (e, id) => {
    // TODO
    console.log('Clicked like on ', id);
  }

  return (
    <div className="App">
      Hello, Students ^_^
      <h2>Puns Please App</h2>
      <Display puns={puns} onDeletePun={handleDeletePun} onLikePun={handleLikePun} />
    </div>
  );
}

export default PunsPlease;
