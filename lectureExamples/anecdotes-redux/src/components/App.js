import { useState } from 'react';
import AnecdoteList from './AnecdoteList';
import AnecdoteForm from './AnecdoteForm';
import AnecdoteFilter from './AnecdoteFilter';

function App() {
  const [anecdotes, setAnecdotes] = useState([
    { id: 1, content: 'If it hurts, do it more often', votes: 0 },
    { id: 2, content: 'Adding manpower to a late software project makes it later!', votes: 0 }
  ])
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    e.preventDefault();
    const typedVal = e.target.value;
    setFilter(typedVal);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    // Create a new anecdote
    const newAnecdote = {
      id: anecdotes.length + 1,
      content,
      votes: 0
    }
    setAnecdotes(anecdotes.concat(newAnecdote));
  }

  //TODO: Implement voting
  const handleVoteClick = (e, id) => {
    e.preventDefault();
    console.log('we clicked vote on anecdote with id of ', id);
  }

  return (
    <div className="App">
      <h2>Anecdote App</h2>
      <AnecdoteFilter filter={filter} onFilterChange={handleFilterChange}/>
      <AnecdoteList anecdotes={anecdotes} onVoteClick={handleVoteClick} filter={filter}/>
      <h3>Anecdote Form</h3>
      <AnecdoteForm onFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default App;
