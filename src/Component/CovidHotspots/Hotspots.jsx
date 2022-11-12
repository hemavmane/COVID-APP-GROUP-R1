import React from "react";
import { useContext } from "react";
import { createContextApi } from "../ContextApi/ContextApi";


export function CovidHotSpots() {
  const { coviddata, setCovidData } = useContext(createContextApi);

  return (
    <>
      <div id="world-map">
        <h1>This is world map</h1>
      </div>
    </>
  );
}

