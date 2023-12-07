import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer';

// initialize our store with our slices
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})

console.log('store is', store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
