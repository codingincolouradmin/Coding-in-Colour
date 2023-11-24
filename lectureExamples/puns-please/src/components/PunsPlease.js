import Display from "./Display";
import { useState, useEffect } from 'react';
import punServices from "../services/punServices";

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

  useEffect(() => {
    punServices.getPuns().then((puns) => setPuns(puns))
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
      <h1>Puns Please App</h1>
      <Display puns={puns} onDeletePun={handleDeletePun} onLikePun={handleLikePun} />
    </div>
  );
}

export default PunsPlease;
