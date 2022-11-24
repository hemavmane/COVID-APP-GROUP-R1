import axios from "axios";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  
} from "recharts";




const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value} 
    </text>
    
  );
};




const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export function MainChart() {
  const [obj, setObj] = useState([
    {
      
      country: "",
      activePerOneMillion: "",
      casesPerOneMillion: "",
      recovered:"",
      // img:"hema",
    },
  ]);
  
  useEffect(() => {
    const MainChartData = async () => {
      await axios
        .get(
          "https://disease.sh/v3/covid-19/countries"
        )
        .then((res) => {
         setObj(res.data)
        });
    };
    MainChartData();
  }, []);

 
  return (
    <>
    
  
      <div className="main_chart_container">
        <LineChart
          width={750}
          height={330}
          data={obj}
          margin={{
            top: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country"  height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activePerOneMillion" stroke="#0000FF">
          <LabelList content={<CustomizedLabel />} />
          </Line>
          <Line type="monotone" dataKey="casesPerOneMillion" stroke="#82CA9D" />
          <Line type="monotone" dataKey="recovered" stroke="#FF0000" /> 
        </LineChart>
      </div>
    </>
  );
}