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

  //TODO: Implement change filter
  const handleFilterChange = (e) => {
    e.preventDefault();
    const typedVal = e.target.value;
    setFilter(typedVal);
  }

  //TODO: Implement submitting the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    console.log('we clicked submit with value of ', content);
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
