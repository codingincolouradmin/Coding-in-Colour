import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import booksSliceReducer from "./features/booksSlice";
import authorSliceReducer from "./features/authorsSlice";

const store = configureStore({
  reducer: {
    books: booksSliceReducer,
    authors: authorSliceReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
