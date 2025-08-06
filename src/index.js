import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import a from './App1.js'; 
// import {a,b} from './App1.js'; 
import reportWebVitals from './reportWebVitals';
// import Add  from './App1';
import App from './App1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <h1> {a}</h1>    for single variable */}
    {/* <h1>addition {a+b}</h1>  for multiple variable     */}
    {/* <Add />  */}
    {/* <App /> */}
    <App></App>
  </React.StrictMode>
);


reportWebVitals();
