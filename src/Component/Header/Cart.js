import React, { useContext } from 'react'
import './cart.css'
import { createHeadarContextApi } from "../HeaderContextApi/HeaderContextApi";

function Cart() {
 const { headerData } = useContext(createHeadarContextApi);
  return (
    <>
      <div className="text">
        <p>Data source: Gavi/World Health Organization.</p>
      </div>
      <div className="btn">
        <button className="btn1">GAVI COUNTRIES</button>
        <button className="btn2">GLOBAL</button>
      </div>
          {headerData.map((i)=>{
            return (
              <div>
                <div className="container">
                  <div className="first">
                    <span>
                      <p>Gavi countries with confirmed cases:{i.ActiveCases}</p>
                    </span>
                  </div>

                  <div className="second">
                    <span>
                      <p>Total Cases:{i.TotalCases}</p>
                      <p>Recovered cases:{i.NewRecovered}</p>
                    </span>
                  </div>

                  <div className="third">
                    <span>
                      <p>Total Deaths:{i.TotalDeaths}</p>
                      <p>{i.NewDeaths} new deaths</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
}

export default Cart
