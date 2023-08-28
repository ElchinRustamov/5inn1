import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Css/style.css";
import {BrowserRouter} from "react-router-dom"
import  { StateContextprovider } from "./Context/ContextState"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <BrowserRouter>
    <StateContextprovider>
      <App />
    </StateContextprovider>
    </BrowserRouter>
  </React.StrictMode>
);


