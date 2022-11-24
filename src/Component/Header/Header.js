import React from 'react'
import image from "./logo/Gavi-logo_1b.png";
import {Link} from 'react-router-dom'

import './Header.css';

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <img src={image} alt="logo" />
        </div>
        <div className="right">
          <ul className="list">
            <li>
              <a href="#">OUR ALLIANCE</a>
              <div className="sublinks1">
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                <Link>Dashboard&gt;
                </Link>
                  </li>
                  <li>
                    <a href="#">Operating model &gt;</a>
                  </li>
                  <li>
                    <a href="#">Governance &gt;</a>
                  </li>
                  <li>
                    <a href="#">Market Shaping</a>
                  </li>
                  <li>
                    <a href="#">Global Health & Development &gt;</a>
                  </li>
                  <li>
                    <a href="#">Work with us &gt;</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#">PROGRAMMERS & IMPACT</a>
              <div className="sublinks2">
                <ul>
                  <li>
                    <a href="#">How our support works &gt;</a>
                  </li>
                  <li>
                    <a href="#">Types of support &gt;</a>
                  </li>
                  <li>
                    <a href="#">Country Hub &gt;</a>
                  </li>
                  <li>
                    <a href="#">Our Impact &gt;</a>
                  </li>
                  <li>
                    <a href="#">Programmatic Policies &gt;</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#">INVESTING IN GAVI</a>
              <div className="sublinks3">
                <ul>
                  <li>
                    <a href="#">Resource mobilisation process &gt;</a>
                  </li>
                  <li>
                    <a href="#">Funding &gt;</a>
                  </li>
                  <li>
                    <a href="#">Partnering with business</a>
                  </li>
                  <li>
                    <a href="#">Innovative financing &gt;</a>
                  </li>
                  <li>
                    <a href="#">INFUSE &gt;</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#">VACCINESWORK</a>
              <div className="sublinks4">
                <ul>
                  <li>
                    <a href="#">About VaccinesWork</a>
                  </li>
                  <li>
                    <a href="#">The science behind COVID-19</a>
                  </li>
                  <li>
                    <a href="#">Emerging threats</a>
                  </li>
                  <li>
                    <a href="#">Tales from the past</a>
                  </li>
                  <li>
                    <a href="#">News from the lab</a>
                  </li>
                  <li>Stories from the community</li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#">NEWS & RESOURCES</a>
              <div className="sublinks5">
                <ul>
                  <li>
                    <a href="#">Media room &gt;</a>
                  </li>
                  <li>
                    <a href="#">Publications</a>
                  </li>
                  <li>
                    <a href="#">Document library &gt;</a>
                  </li>
                  <li>
                    <a href="#">Knowledge Produts</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <span></span>
        </div>
      </nav>
    </>
  );
}

export default Header
