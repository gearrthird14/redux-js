import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import usersReducer from "./features/reducer/Users";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
