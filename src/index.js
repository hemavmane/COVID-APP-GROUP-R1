import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MyCovidApp } from "./Component/CovidGraph/CovidGraph";
import Header from "./Component/Header/Header";
import Heading from "./Component/Header/Heading";
import Cart from "./Component/Header/Cart";
import { HeaderContextApiProvider } from "./Component/HeaderContextApi/HeaderContextApi";
import Footer from "./Component/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderContextApiProvider>
      <Header />
      <Heading />
      <Cart />
      <MyCovidApp />
      <Footer />
    </HeaderContextApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
