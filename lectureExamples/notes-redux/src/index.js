import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import noteReducer from './reducers/noteReducer';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
// Reference: Fullstackopen

function App() {
  return (
    <div className="App">
      <Notes />
      <NewNote />
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