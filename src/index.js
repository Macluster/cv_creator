import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firedata from './backend/Database' 

import { set, ref, onValue } from "firebase/database";

onValue(
  ref(firedata, "ProfileVisits/count"),
  (snapshot) => {
  
   
   set(ref(firedata, "ProfileVisits"), {"count": (parseInt( snapshot.val())+1) });

  },
 {onlyOnce:true}
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
