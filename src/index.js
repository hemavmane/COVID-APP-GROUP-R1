import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import  App  from "./App";
import { BrowserRouter } from "react-router-dom";

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
      {/* <HeaderContextApiProvider> */}
        {/* <ContextApiProvider1> */}
          {/* <App /> */}
         <App/>
        {/* </ContextApiProvider1> */}
      {/* </HeaderContextApiProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
