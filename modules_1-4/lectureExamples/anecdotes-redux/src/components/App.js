import AnecdoteList from './AnecdoteList';
import AnecdoteForm from './AnecdoteForm';
import AnecdoteFilter from './AnecdoteFilter';

function App() {
  return (
    <div className="App">
      <h2>Anecdote App</h2>
      <AnecdoteFilter />
      <AnecdoteList />
      <h3>Anecdote Form</h3>
      <AnecdoteForm />
    </div>
  );
}

export default App;
