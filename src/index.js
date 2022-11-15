import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from '/Users/admin/CovidAppProject/COVID-APP-GROUP-R1/src/App.js'
import {ContextApi, CreateContext} from './Component/DataTable/CreateContext'
// import {ContextApi} from './Component/ContextApi/ContextApi'
// import { CovidGraph } from './Component/CovidGraph/CovidGraph';
// import  {CovidHotSpots}  from './Component/CovidHotspots/Hotspots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextApi>
    <App />
    </ContextApi>
  
  


    {/* <MyCovidApp/> */}
    {/* <ContextApi>
      <CovidGraph/>
      <CovidHotSpots/>
    </ContextApi> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
