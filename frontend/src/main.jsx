import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.scss'
import emailjs from '@emailjs/browser';

const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if(key === null){
  console.log("EmailJS public key is null;")
}
emailjs.init(key);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root')
)

