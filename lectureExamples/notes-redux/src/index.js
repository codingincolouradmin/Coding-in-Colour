import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createStore, combineReducers } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import noteReducer from './reducers/noteReducer';
import { filterChange } from './reducers/filterActions';
import filterReducer from './reducers/filterReducer';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
// Reference: Fullstackopen

function App() {
  const dispatch = useDispatch();

  const handleClickedButton = (e) => {
    const radioSelection = e.target.value;
    dispatch(filterChange(radioSelection));
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

// create a new reducer for our store
const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
// initialize store
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)