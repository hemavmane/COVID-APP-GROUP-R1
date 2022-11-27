import {React,useState} from 'react'
import image from "./logo/Gavi-logo_1b.png";
import {News} from '../NewsCovid/News'
import './Header.css';
import {Link} from 'react-router-dom'
function Header() {
const [seachdata,setSeachData] = useState("")

  const sublink = [
    [
      "About",
      "Operating model",
      "Governance",
      "Market Shaping",
      "Global Health & Development",
      "Work with us",
    ],
    [
      "How our support works",
      "Types of support",
      "Country Hub",
      "Our Impact",
      "Programmatic Policies",
    ],
    [
      "Resource mobilisation process",
      "Funding",
      "Partnering with business",
      "Innovative financing",
      "INFUSE",
    ],
    [
      "About VaccinesWork",
      "The science behind COVID-19",
      "Emerging threats",
      "Tales from the past",
      "News from the lab",
      "Stories from the community",
    ],
    ["Media room", "Publications", "Document library", "Knowledge Produts"],
  ];


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
                    <a href="#">
                      Strategy &gt;</a>
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
                  
                  {sublink[0].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a href="#">PROGRAMMERS & IMPACT</a>
              <div className="sublinks2">
                <ul>
                  {sublink[1].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a href="#">INVESTING IN GAVI</a>
              <div className="sublinks3">
                <ul>
                  {sublink[2].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a href="#">VACCINESWORK</a>
              <div className="sublinks4">
                <ul>
                  {sublink[3].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <Link to="/news">NEWS & RESOURCES </Link>
              
              <div className="sublinks5">
                <ul>
                  {sublink[4].map((item) => {
                    return (
                      <li>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
         
        </div>
      </nav>
     <input type="text" className='input_search_covid' placeholder='seach here ' value={seachdata}
       onChange={(e)=>setSeachData(e.target.value)}/>

     
    
    </>
  );
}

export default Header
