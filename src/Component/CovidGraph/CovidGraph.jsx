import React from "react";
import { useContext } from "react";
import { createContextApi } from "../ContextApi/ContextApi";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
} from "recharts";

export function CovidGraph() {
  const { coviddata } = useContext(createContextApi);

  return (
    <>
      <h1>COVID CASES & DEATHS</h1>
      <div>
        <AreaChart
          width={1000}
          height={560}
          data={coviddata}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="Country" />
          <YAxis width={90} allowDataOverflow="true" dataKey="Population" />
          <CartesianGrid />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="TotalCases"
            stroke="#8884d8"
            fillOpacity={0.6}
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="TotalDeaths"
            stroke="#82ca9d"
            fillOpacity={0.6}
            fill="red"
          />
        </AreaChart>
      </div>
    </>
  );
}
