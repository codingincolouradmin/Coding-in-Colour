import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { noteReducer, createNote, toggleImportanceOf } from './reducers/noteReducer';
// Reference: Fullstackopen

function App() {
  const dispatch = useDispatch(); // gives the component the ability to dispatch
  const notes = useSelector(state => { return state }); // gives component access to redux state

  const handleClickSubmit = (e) => {
    e.preventDefault();
    const note = e.target.note.value;
    e.target.note.value = '';
    dispatch(createNote(note))
  }

  const handleClickImportant = (e, id) => {
    e.preventDefault();
    console.log('Changing importance of note with id: ', id);
    dispatch(toggleImportanceOf(id))

  }

  return (
    <div className="App">
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              {note.content} <strong>{note.important ? 'important': ''}</strong>
              <button onClick={(e) => handleClickImportant(e, note.id)}>{note.important ? 'Unimportant' : 'important'}</button>
            </li>
          )
        })}
      </ul>
      <h3>Add Note</h3>
      <form onSubmit={handleClickSubmit}>
        <input name="note" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

// initialize store
const store = createStore(noteReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)