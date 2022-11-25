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
// import { HeaderContextApiProvider } from "./Component/HeaderContextApi/HeaderContextApi";
import Header from "./Component/Header/Header";
import Heading from "./Component/Header/Heading";
import Cart from "./Component/Header/Cart";
import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";
import { Countries } from "./Component/Countries/Countries";
import { CovidCasesData } from "./Component/Covid/CovidCases";

import "./App.css";
import "./Component/VaccineData/Vaccine.css";
import "./Component/CovidGraph/CovidGraph.css";

function App() {
  const { coviddata } = useContext(createContextApi);
  console.log(coviddata);
console.log(coviddata)

  useEffect(() => {
    setTimeout(() => {
      dna();
    }, 2000);
    coviddata.push(1);
  }, []);
  },[]);

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
        <HeaderContextApiProvider>
          <Header />
          <Heading />
          <Cart />
        </HeaderContextApiProvider>
        {coviddata.length > 0 ? (
          <div className="app_background">
            <VaccineButtons />
            <Routes>
              <Route path="/" element={<VaccineData />} />
              <Route path="/covidgraph" element={<CovidGraph />} />
              <Route path="/fda" element={<Fda />} />
              <Route path="/phase1" element={<Phase1 />} />
              <Route path="/news" element={<News />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/countries" element={<CovidCasesData />} />
            </Routes>
        <Header />
        <Heading />
        <Cart />

        {coviddata.length > 0 ? (
          <div className="app_background">
           
            {/* <VaccineButtons /> */}
            {/* <Routes>
              <Route path="/" element={<VaccineData />} />
            
              <Route path="/covidgraph" element={<CovidGraph />} />
             
              <Route path="/fda" element={<Fda />} />
              <Route path="/phase1" element={<Phase1 />} />
              <Route path="/news" element={<News />} />
            </Routes> */}

            {/* <HeaderContextApiProvider> */}

            {/* <MyCovidApp /> */}

            {/* </HeaderContextApiProvider> */}
            {/* </ContextApiProvider1> */}
          </div>
        ) : (
          <div className="dna">{dna()}</div>
        )}
      </div>
    </>
  );
}

export default App;
