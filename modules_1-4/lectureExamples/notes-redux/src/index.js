import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';
// Reference: Fullstackopen

function App() {
  return (
    <div className="App">
      <Notes />
      <VisibilityFilter />
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