import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
=======
import ReactDOM from 'react-dom';
>>>>>>> 1faa2a17121addcad1c810c37c1837ce7d4d156f
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 1faa2a17121addcad1c810c37c1837ce7d4d156f
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
