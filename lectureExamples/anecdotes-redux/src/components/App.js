import { useState } from 'react';
import AnecdoteList from './AnecdoteList';
import AnecdoteForm from './AnecdoteForm';
import AnecdoteFilter from './AnecdoteFilter';

function App() {
  const [anecdotes, setAnecdotes] = useState([
    { id: 1, content: 'Software development: 1% coding, 99% figuring out why it is not working', votes: 0 },
    { id: 2, content: 'Debugging is like being the detective in a crime movie where you are also the culprit', votes: 0 },
    { id: 3, content: "Programming is the art of telling a computer what to do; it's also the art of explaining to yourself why it doesn't work", votes: 0 }
  ])

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

  const handleVoteClick = (e, id) => {
    e.preventDefault();
    const newAnecdotes = anecdotes.map((anecdote) => {
      return (anecdote.id === id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote)
    })
    setAnecdotes(newAnecdotes);
  }

  return (
    <div className="App">
      <h2>Anecdote App</h2>
      <AnecdoteFilter />
      <AnecdoteList anecdotes={anecdotes} onVoteClick={handleVoteClick}/>
      <h3>Anecdote Form</h3>
      <AnecdoteForm onFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default App;
