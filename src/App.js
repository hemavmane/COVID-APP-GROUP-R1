<<<<<<< HEAD
import React from 'react';
import './App.css';
import Footer from './Component/Footer/Footer'
function App() {
  return (
   <>
   <Footer/>
   </>
=======
import { Dna } from "react-loader-spinner";
import { Routes, Route } from "react-router-dom";

import { createContextApi } from "./Component/ContextApiProvider1/ContextApiProvider1";
import { useContext, useEffect } from "react";

import { VaccineData } from "./Component/VaccineData/Vaccine";
import { CovidGraph } from "./Component/CovidGraph/CovidGraph";
import { VaccineButtons } from "./Component/VaccineButtonsContainer/VaccineButtons";
import { Fda } from "./Component/FdaApprrove/Fda";
import { Phase1 } from "./Component/Phase1/Phase";
import { News } from "./Component/NewsCovid/News";

import "./App.css";
import "./Component/VaccineData/Vaccine.css";


function App() {
  const { coviddata } = useContext(createContextApi);
>>>>>>> ed774de42c9de6798c8c2c25a74e629e5e967746

  useEffect(() => {
    setTimeout(() => {
      dna();
    }, 2000);
    coviddata.push(1);
  }, []);

  const dna = () => {
    return (
     

      <Dna 
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  };
  return (
    <>
      <div>
        {coviddata.length > 0 ? (
          <div className="app_background">
            <VaccineButtons />
            <Routes>
              <Route path="/" element={<VaccineData />} />
              <Route path="/covidgraph" element={ <CovidGraph />} />
              <Route path="/fda" element={<Fda />} />
              <Route path="/phase1" element={<Phase1 />} />
              <Route path="/news" element={<News/>} />
            </Routes>
           
          </div>
        ) : (
          <div className="dna">
            {dna()}
          </div>
          
        )}
      </div>
    </>
  );
}

export default App;

