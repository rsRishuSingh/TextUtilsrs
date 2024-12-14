import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let customWidth = () => {
  let element = document.getElementById("textAreaWidth")
  if (document.body.clientWidth >= 720) {
    element.classList.toggle("w-75")
  }
  else {
    element.classList.toggle("w-75")
  }
}
// customWidth() // Not working on refresh

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*
async function letRender() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
// Not Working

async function awaitLetRender() {
  await letRender();
  customWidth();
}
awaitLetRender();
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
