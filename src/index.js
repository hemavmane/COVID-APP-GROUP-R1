import * as React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom"

import App from "./App";
// import "./index.css";


import reportWebVitals from "./reportWebVitals";


import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";

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
