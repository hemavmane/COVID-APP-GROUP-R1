<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {ContextApi} from './Component/ContextApi/ContextApi'
// import { CovidGraph } from './Component/CovidGraph/CovidGraph';
// import  {CovidHotSpots}  from './Component/CovidHotspots/Hotspots';
import {Footer} from "./Component/Footer/Footer"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextApi>
      {/* <CovidGraph/> */}
      {/* <CovidHotSpots/> */}
       <Footer/> 
    </ContextApi>
=======
import * as React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import App from "./App";
import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <ContextApiProvider1> 
      <App />
    </ContextApiProvider1>
 </BrowserRouter>
>>>>>>> ed774de42c9de6798c8c2c25a74e629e5e967746
  </React.StrictMode>
);


reportWebVitals();
