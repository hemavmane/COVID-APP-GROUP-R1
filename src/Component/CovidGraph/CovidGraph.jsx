import React from "react"
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { useContext } from "react";
import {createContextApi}  from "../ContextApi/ContextApi"
export function CovidGraph() {
 const {coviddata} = useContext(createContextApi)

  return (
    <>
      <h1>COVID CASES & DEATHS</h1>
      <div style={{margin:"130px",padding:"10px",overflow:"visible"}}>
        <AreaChart  
          width={1000}
          height={560}
          data={coviddata}
          style={{overflow:"visible"}}
          margin={{ top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="Country"  />
          <YAxis allowDataOverflow={true}  dataKey="Population"  />
          <CartesianGrid  />
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
