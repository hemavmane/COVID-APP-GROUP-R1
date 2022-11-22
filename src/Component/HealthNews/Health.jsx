import React, { useState, useEffect, createContext } from "react";
import axios from "axios";



const createHealthApi = createContext();

function HealthApi({ children }) {
  const [covidhealth, setCovidhealth] = useState([]);

  useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
        headers: {
          'X-RapidAPI-Key': '69b56f0544mshe1d9f75b422a4e7p142f81jsn40c4bc0c5681',
          'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
          console.log(response.data);
      })
  }, []);
//   return (
//     <>
//       <createContextApi.Provider value={{ covidhealth}}>
//         {children}
//       </createContextApi.Provider>
//     </>
//   );

  return (
    <div>
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}
    </div>
  );
}

export {HealthApi, createHealthApi}