import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log(process.env)
console.log("API Key: " + process.env.REACT_APP_COLAB_KEY)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);