import { useState } from 'react';
import AnecdoteList from './AnecdoteList';

function App() {
  const [anecdotes, setAnecdotes] = useState([
    { id: 1, content: 'If it hurts, do it more often', votes: 0 },
    { id: 2, content: 'Adding manpower to a late software project makes it later!', votes: 0 }
  ])

  //TODO: Implement change filter
  const handleFilterChange = (e) => {
    e.preventDefault();
    console.log('we changed filter to ', e.target.value)
  }

  //TODO: Implement submitting the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('we clicked submit');
  }

  //TODO: Implement voting
  const handleVoteClick = (e, id) => {
    e.preventDefault();
    console.log('we clicked vote on anecdote with id of ', id);
  }

  return (
    <div className="App">
      <h2>Anecdote App</h2>
      <AnecdoteList anecdotes={anecdotes} onVoteClick={handleVoteClick}/>
    </div>
  );
}

export default App;
