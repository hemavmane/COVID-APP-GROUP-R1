import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

              //  Providing Api data
const createContextApi=createContext()

 function ContextApi({children}) {

  const [coviddata, setCovidData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`,
        {
          headers: {
            "X-RapidAPI-Key":
              "8c0c5645f4msh17b4e89de7b874ap10eb20jsn3e95f4dad049",
            "X-RapidAPI-Host":
              "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          },
        }
      )
      .then(response => {
        console.log(response.data);
        response.data = response.data.sort();
        setCovidData([...response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return <>
  <createContextApi.Provider value={{coviddata}} >
         {children}
  </createContextApi.Provider>
    
  </>;
}

export {createContextApi,ContextApi}