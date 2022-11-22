import React, { useState, useEffect, createContext } from "react";
import axios from "axios";



const createHealthApi = createContext();

function HealthApi({ children }) {
  const [covidhealth, setCovidhealth] = useState([]);

  useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://disease.sh/v3/covid-19/all',
        headers: {
          'X-RapidAPI-Key': '69b56f0544mshe1d9f75b422a4e7p142f81jsn40c4bc0c5681',
          'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
          console.log(response.data);
      })
  }, []);


}

export {HealthApi, createHealthApi}