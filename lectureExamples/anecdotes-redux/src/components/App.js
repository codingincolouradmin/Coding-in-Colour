import { useState } from 'react';
import AnecdoteList from './AnecdoteList';
import AnecdoteForm from './AnecdoteForm';
import AnecdoteFilter from './AnecdoteFilter';

function App() {

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const content = e.target.content.value;
  //   e.target.content.value = '';
  //   // Create a new anecdote
  //   const newAnecdote = {
  //     id: anecdotes.length + 1,
  //     content,
  //     votes: 0
  //   }
  //   setAnecdotes(anecdotes.concat(newAnecdote));
  // }

  return (
    <div className="App">
      <h2>Anecdote App</h2>
      <AnecdoteFilter />
      <AnecdoteList />
      <h3>Anecdote Form</h3>
      {/* <AnecdoteForm onFormSubmit={handleFormSubmit}/> */}
    </div>
  );
}

export default App;
