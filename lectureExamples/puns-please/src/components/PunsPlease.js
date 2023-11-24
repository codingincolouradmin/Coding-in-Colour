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

  const syncPuns = () => {
    punServices.getPuns().then(puns => setPuns(puns))
  }

  useEffect(() => {
    syncPuns();
  }, [])

  const handleDeletePun = (e, id) => {
    e.preventDefault();
    punServices.deletePun(id).then(() => {
      syncPuns();
    })
  }

  const handleLikePun = (e, pun) => {
    e.preventDefault();
    punServices.likePun(pun).then(() => {
      syncPuns();
    })
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
