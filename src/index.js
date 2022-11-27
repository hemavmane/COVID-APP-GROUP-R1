<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {ContextApi} from './Component/DataTable/CreateContext'
import "./index.css";
import  App  from "./App";
import { BrowserRouter } from "react-router-dom";
import { HeaderContextApiProvider } from "./Component/HeaderContextApi/HeaderContextApi";
=======
import * as React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import App from "./App";
>>>>>>> ed774de42c9de6798c8c2c25a74e629e5e967746
import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>  
    <BrowserRouter>
<<<<<<< HEAD
      <HeaderContextApiProvider>
        <ContextApiProvider1>
        <ContextApi>
         <App/>
         </ContextApi>
        </ContextApiProvider1>
      </HeaderContextApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
=======
     <ContextApiProvider1> 
      <App />
    </ContextApiProvider1>
 </BrowserRouter>
  </React.StrictMode>
);


>>>>>>> ed774de42c9de6798c8c2c25a74e629e5e967746
reportWebVitals();
