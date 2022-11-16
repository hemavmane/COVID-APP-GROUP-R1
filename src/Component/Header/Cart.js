import React from 'react'
import './cart.css'

function Cart() {
  return (
    <>
      <div className="text">
        <p>Data source: Gavi/World Health Organization.</p>
      </div>
      <div className="btn">
        <button className="btn1">GAVI COUNTRIES</button>
        <button className="btn2">GLOBAL</button>
      </div>
      <div className="container">
        <div className="first">
          <span>
            123456789
            <p>Gavi countries with confirmed cases</p>
          </span>
        </div>
        <div className="second">
          <span>
            <p>Confirmed Cases</p>
            123456789
            <p>817 new cases</p>
          </span>
        </div>
        <div className="third">
          <span>
            <p>Confirmed Deaths</p>
            123456789
            <p>8 new deaths</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Cart
