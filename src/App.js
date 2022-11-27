<<<<<<< HEAD
=======
import { Dna } from "react-loader-spinner";
import { Routes, Route } from "react-router-dom";
>>>>>>> ed774de42c9de6798c8c2c25a74e629e5e967746

import { useContext, useEffect } from "react";
import { Dna } from 'react-loader-spinner'
import { Routes, Route } from "react-router-dom";

import { createContextApi } from "./Component/ContextApiProvider1/ContextApiProvider1";
import { VaccineData } from "./Component/VaccineData/Vaccine";
import { CovidGraph } from "./Component/CovidGraph/CovidGraph";
import { VaccineButtons } from "./Component/VaccineButtonsContainer/VaccineButtons";
import { Fda } from "./Component/FdaApprrove/Fda";
import { Phase1 } from "./Component/Phase1/Phase";
import { News } from "./Component/NewsCovid/News";
<<<<<<< HEAD
import Header from "./Component/Header/Header";
import Heading from "./Component/Header/Heading";
import Cart from "./Component/Header/Cart";
import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";
import DataTable from './Component/DataTable/DataTable'
// import Registration from './Component/Registration/Registration'
=======
>>>>>>> ed774de42c9de6798c8c2c25a74e629e5e967746

import "./App.css";
import "./Component/VaccineData/Vaccine.css";


function App() {
  const { coviddata } = useContext(createContextApi);
<<<<<<< HEAD
  console.log(coviddata)
=======
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
<<<<<<< HEAD

            <VaccineButtons />
            <Routes>
              <Route path="/" element={<VaccineData />} />

              <Route path="/covidgraph" element={<CovidGraph />} />

              <Route path="/fda" element={<Fda />
              } />
              <Route path="/phase1" element={<Phase1 />} />
              <Route path="/news" element={<News />} />
            </Routes>
            {/* <ContextApi> */}
            <DataTable />
            {/* <Registration /> */}
            {/* </ContextApi> */}
            {/* <Health/>  */}

=======
            <VaccineButtons />
            <Routes>
              <Route path="/" element={<VaccineData />} />
              <Route path="/covidgraph" element={ <CovidGraph />} />
              <Route path="/fda" element={<Fda />} />
              <Route path="/phase1" element={<Phase1 />} />
              <Route path="/news" element={<News/>} />
            </Routes>
           
>>>>>>> ed774de42c9de6798c8c2c25a74e629e5e967746
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
