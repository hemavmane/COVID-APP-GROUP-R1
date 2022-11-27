import React from "react";
import image1 from "../assest/Footer_img/glogo.png";
import image2 from "../assest/Footer_img/gate.png";
import image3 from '../assest/Footer_img/caf.png'

import image4 from "../assest/Footer_img/uf.png";
import image5 from "../assest/Footer_img/vs.png";
import image6 from "../assest/Footer_img/wb.png";
import image7 from "../assest/Footer_img/who.png";

import '../Footer/Footer.css'

export function Footer() {
  return (
    <>
      <div className="box1">
        <div className="left1">
          <h2>Subscribe to our newsletter</h2>
        </div>
        <div className="right1">
          <button className="sub">SUBSCRIBE</button>
        </div>
      </div>




      <div className="box2">
        <div className="logo logo1">
          <img className="logo-1" src={image1} alt="logo" />
        </div>

        <div className="links">
          <a className="nav-links" href="#">Our Alliance</a>
          <a className="nav-links" href="#">Our Alliance</a>
          <a className="nav-links" href="#">Our Alliance</a>
          <a className="nav-links" href="#">Our Alliance</a>
          <a className="nav-links" href="#">Programmes & impact</a>
          <a className="nav-links" href="#">Investing in Gavi</a>
          <a className="nav-links" href="#">VaccinesWork</a>
          <a className="nav-links" href="#">News & resources</a>
          <a className="nav-links" href="#">Country portal|COVAX platform</a>
          <a className="nav-links" href="#">Donate</a>
          <a className="nav-links" href="#">Careers</a>
          <a className="nav-links" href="#">Contact</a>
          <a className="nav-links" href="#">Ethics hotline</a>
          <a className="nav-links"  href="#">IFFLm</a>
          <a className="nav-links" href="#">Privacy Policy</a>
          <a className="nav-links" href="#">Terms of use</a>
          <a className="nav-links" href="#">Phishing and fraud</a>
        </div>

        <div className="icons">
          <p>© Gavi 2022</p>
          <div className="social-icons">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-instagram"></i>

          </div>
          
        </div>
      </div>



      <div className="box3">
        <div className="first">
          <img src={image5} alt="logo" />
          <img src={image3} alt="logo" />
          <p>
            Our achievements are thanks to the support and expertise of our
            founding partners
          </p>
        </div>
        

        <div className="second">
        <img src={image7} alt="logo" /> 
         <img src={image4} alt="logo" />
                     <img src={image2} alt="logo" />
       <img src={image6} alt="logo" />
          
        </div>
      </div>
    </>
  );
}

export default Footer



