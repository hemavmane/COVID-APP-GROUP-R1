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
  </React.StrictMode>
);


reportWebVitals();
