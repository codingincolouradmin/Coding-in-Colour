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

  const handleClickedButton = (e) => {
    console.log('clicked ', e.target.value);
  }

  return (
    <div className="App">
      <Notes />
      <div>
        all <input type="radio" name="filter" value="ALL" onChange={handleClickedButton}/>
        important <input type="radio" name="filter" value="IMPORTANT" onChange={handleClickedButton} />
        nonimportant <input type="radio" name="filter" value="NONIMPORTANT" onChange={handleClickedButton} />
      </div>
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