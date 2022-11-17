import React from 'react'
import '../Footer/footer.css'
import image1 from "../Footer/Logo/Gavi-logo_1b.png";
import image2 from "../Footer/Logo/VSN-logo.png";
import image3 from "../Footer/Logo/CAF-International-Validated-Organization.png";
import image4 from "../Footer/Logo/world-bank-footer2.png";
import image5 from "../Footer/Logo/unicef-footer2.png";
import image6 from "../Footer/Logo/gates-foundation-footer2.png";
import image7 from "../Footer/Logo/world-bank-footer2.png";


function Footer() {
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
        <div className="logo">
          <img src={image1} alt="logo" />
        </div>

        <div className="links">
          <a href="#">Our Alliance</a>
          <a href="#">Programmes & impact</a>
          <a href="#">Investing in Gavi</a>
          <a href="#">VaccinesWork</a>
          <a href="#">News & resources</a>
          <a href="#">Country portal|COVAX platform</a>
          <a href="#">Donate</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Ethics hotline</a>
          <a href="#">IFFLm</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of use</a>
          <a href="#">Phishing and fraud</a>
        </div>

        <div className="icons">
          <p>© Gavi 2022</p>
        </div>
      </div>

      <div className="box3">
        <div className="first">
          <img src={image2} alt="logo" />
          <img src={image3} alt="logo" />
          <p>
            Our achievements are thanks to the support and expertise of our
            founding partners
          </p>
        </div>

        <div className="second">
          <img src={image4} alt="logo" />
          <img src={image5} alt="logo" />
          <img src={image6} alt="logo" />
          <img src={image7} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Footer
