import React from 'react'; //engine that does all the work as an application builder
import ReactDOM from 'react-dom'; //web related projects -> web applications //reactnative for mobile, reactvr for VR
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//strictmode is to check deprecated features in code
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
