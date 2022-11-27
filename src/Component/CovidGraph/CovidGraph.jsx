import { useContext, useState } from "react";
import { createContextApi } from "../ContextApiProvider1/ContextApiProvider1";

import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
 
  
} from "recharts";

import "../CovidGraph/CovidGraph.css";
import "react-toastify/dist/ReactToastify.css";

export function CovidGraph() {
  const { coviddata, error, showToast } = useContext(createContextApi);
  const [iscurrent, setISCurrent] = useState(false);
  const handleCurrentData = () => {
    setISCurrent(!iscurrent);
  };

  return (
    <>
    <div className="graph_container">
      
      <div className="daily_changes">
      <Button
        
        variant="contained"
        onClick={handleCurrentData}>
        Daily Changes
      </Button>
      </div>
      <div className="Areachart">
        {iscurrent ? (
          <div className="Areachart_1">
      <h1 className="heading_graph">ACTIVE CASES & TOTAL TESTS</h1>
            <AreaChart
              width={1000}
              height={530}
              data={coviddata}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="Country"  />
              <YAxis width={90} allowDataOverflow="true" dataKey="Population" />
              <CartesianGrid />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="ActiveCases"
                stroke="#22577a"
                fillOpacity={0.8}
                fill="#03045e"
              />
             
              <Area
                type="monotone"
                dataKey="TotalTests"
                stroke="#219ebc"
                fillOpacity={0.3}
                fill="#219ebc"
              />
            </AreaChart>
          </div>
        ) : (
          <div className="Areachart_2">
            <h1 className="heading_graph">TOTAL CASES & TOTAL DEATHS</h1>
            <AreaChart
              width={1000}
              height={530}
              data={coviddata}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis allowDataOverflow="true" dataKey="Country" />
              <YAxis width={90} allowDataOverflow="true" dataKey="Population" />
              <CartesianGrid />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="TotalCases"
                stroke="#03045e"
                fillOpacity={0.6}
                fill="#1f7a8c"
              />
              <Area
                type="monotone"
                dataKey="TotalDeaths"
                stroke="#82ca9d"
                fillOpacity={0.6}
                fill="#03045e"
              />
            </AreaChart>
          </div>
        )}

        {showToast && toast(error) && <ToastContainer theme="dark" />}
      </div>
    </div>
    </>
  );
}
