import * as React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
// import {MainChart} from './Component/Co/C'
import App from "./App";
// import {Countries} from './Component/Map/Map'
import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";
import "./index.css";


import reportWebVitals from "./reportWebVitals";

// import { MyCovidApp } from "./Component/CovidGraph/CovidGraph";
// import App from "./App";

// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
// import { HeaderContextApiProvider } from "./Component/HeaderContextApi/HeaderContextApi";
// import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <ContextApiProvider1> 
      <App />
    </ContextApiProvider1>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
