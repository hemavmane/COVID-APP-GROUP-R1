import React, { useContext } from 'react'
import { createHeadarContextApi } from "../HeaderContextApi/HeaderContextApi";

import "./cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
 const { headerData, error, headerToast } = useContext(createHeadarContextApi);
  return (
    <>
      <div className="text">
        <p>Data source: Gavi/World Health Organization.</p>
      </div>
      <div className="btn">
        <button className="btn1">DashBoard</button>
        <button className="btn2">GLOBAL</button>
      </div>
      {headerData.map(
        ({
          ActiveCases,
          TotalCases,
          NewCases,
          Serious_Critical,
          NewDeaths,
          TotalDeaths
        }) => {
          return (
            <div>
              <div className="container">
                <div className="first">
                  <span>
                    <p>Total Cases: {ActiveCases}</p>
                  </span>
                </div>

                <div className="second">
                  <span>
                    <p>Active Cases: {TotalCases}</p>
                  </span>
                </div>

                <div className="third">
                  <span>
                    <p>Total Deaths: {TotalDeaths}</p>
                  </span>
                </div>

                <div className="fourth">
                  <span>
                    <p>New Cases: {NewCases}</p>
                  </span>
                </div>

                <div className="five">
                  <span>
                    <p>CRITICAL: {Serious_Critical}</p>
                  </span>
                </div>

                <div className="six">
                  <span>
                    <p>New Deaths: {NewDeaths}</p>
                  </span>
                </div>
              </div>
            </div>
          );
        }
      )}
      {headerToast && toast(error) && <ToastContainer theme='dark'/>}
    </>
  );
}

export default Cart
