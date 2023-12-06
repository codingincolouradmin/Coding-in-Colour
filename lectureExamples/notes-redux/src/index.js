import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createStore } from 'redux';

// Reference: Fullstackopen

// our initial state
const initialNotes = [
  { id: 1, content: 'Mangoes are my favourite', important: false },
  { id: 2, content: 'Redux is useful for state management', important: true },
  { id: 3, content: 'Always eat your vegetables', important: true }
]

// reducer that handles updating our store's state
const noteReducer = (state = initialNotes, action) => {
  switch (action.type) {
    case 'CREATE':
      return state;
    case 'SET_IMPORTANT':
      return state;
    default: 
    return state;
  }
}

// initialize store
const store = createStore(noteReducer)

function App() {
  return (
    <div className="App">
      <h2>Notes</h2>
      <ul>
        {store.getState().map((note) => {
          return (
            <li key={note.id}>
              {note.content} <strong>{note.important ? 'important': ''}</strong>
            </li>
          )
        })}
      </ul>
      <h3>Add Note</h3>
      <form>
        <input name="note" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
  root.render(<App />)
}

renderApp(); // renders our app
/**
 * adds renderApp as a change listener to the store (analogous to controller-view in Flux, but simpler)
 * Since renderApp manages rendering the entire application
 * Whenever an action is dispatched and the state in the store changes, renderApp function is called
 * This ensures the UI is updated to reflect the latest state stored in redux
 */
store.subscribe(renderApp); 