import { Dna } from "react-loader-spinner";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import { createContextApi } from "./Component/ContextApiProvider1/ContextApiProvider1";
import { VaccineData } from "./Component/VaccineData/Vaccine";
import { CovidGraph } from "./Component/CovidGraph/CovidGraph";
import { VaccineButtons } from "./Component/VaccineButtonsContainer/VaccineButtons";
import { Fda } from "./Component/FdaApprrove/Fda";
import { Phase1 } from "./Component/Phase1/Phase";
import { News } from "./Component/NewsCovid/News";
import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";
import DataTable from './Component/DataTable/DataTable'

import "./App.css";
import "./Component/VaccineData/Vaccine.css";


function App() {
  const { coviddata } = useContext(createContextApi);
  console.log(coviddata)

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

              <Route path="/covidgraph" element={<CovidGraph />} />

              <Route path="/fda" element={<Fda />
              } />
              <Route path="/phase1" element={<Phase1 />} />
              <Route path="/news" element={<News />} />
            </Routes>
            <DataTable />

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
