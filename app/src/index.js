import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Shizuru/Shizuru-Regular.ttf'; // font-family: 'Shizuru', sans-serif;
import './fonts/Kufam/static/Kufam-Medium.ttf'; // font-family: 'Kufam', sans-serif;
import './fonts/Kufam/static/Kufam-SemiBold.ttf'; // font-family: 'Kufam', sans-serif;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
