import Display from "./Display";
import Feedback from "./Feedback";
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

  const handleFeedbackChange = (e) => {
    const newFeedback = {
      ...feedback,
      [e.target.name]: e.target.value
    }
    setFeedback(newFeedback);
  }

  const handleFeedbackClick = (e) => {
    setFeedback({
      name: '',
      message: ''
    })
  }

  return (
    <div className="App">
      Hello, Students ^_^
      <h1>Puns Please App</h1>
      <Display puns={puns} onDeletePun={handleDeletePun} onLikePun={handleLikePun} />
      <Feedback feedback={feedback} onFeedbackChange={handleFeedbackChange} onFeedbackClick={handleFeedbackClick}/>
    </div>
  );
}

export default PunsPlease;
