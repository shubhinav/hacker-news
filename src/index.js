import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SearchContextProvider} from "./Context/SearchContext"
import { ThemeContextProvider } from './Context/ThemeContext';
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchContextProvider>
        <Router>
          <App />
        </Router>
      </SearchContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
