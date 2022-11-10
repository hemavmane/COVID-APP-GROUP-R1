import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
export function MyCovidApp() {
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
        setCovidData([...response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>COVID CASES & DEATHS</h1>
    
      <div>
        <AreaChart
          width={830}
          height={450}
          data={coviddata}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="Deaths" tickCount="1,2" />
          <YAxis />
          <CartesianGrid strokeDasharray="[1,2,3,4,5]" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="TotalCases"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="TotalDeaths"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </>
  );
}
