import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar  from './component/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Thirdbox2 from "./component/Thirdbox/Thirdbox2"
import Sign from "./component/Sign/Sign"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <BrowserRouter>
    <App/>
    </BrowserRouter>
    
  {/* <Sign/> */}
    
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
