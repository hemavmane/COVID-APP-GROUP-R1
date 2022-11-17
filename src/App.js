import { Dna } from "react-loader-spinner";
import { createContextApi } from "./Component/ContextApiProvider1/ContextApiProvider1";
import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { VaccineData } from "./Component/VaccineData/Vaccine";
import { CovidGraph } from "./Component/CovidGraph/CovidGraph";
import { VaccineButtons } from "./Component/VaccineButtonsContainer/VaccineButtons";
import { Fda } from "./Component/FdaApprrove/Fda";
import { Phase1 } from "./Component/Phase1/Phase";

import "./App.css";
import "./Component/VaccineData/Vaccine.css";



function App() {
  const { coviddata } = useContext(createContextApi);


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
              <Route path="*" element={<VaccineData />} />
              <Route path="/fda" element={<Fda />} />
              <Route path="/phase1" element={<Phase1/>}  />
              
            </Routes>
            <CovidGraph />
          </div>
        ) : (
          dna()
        )}
      </div>
    </>
  );
}

export default App;
