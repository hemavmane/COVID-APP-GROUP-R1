
import React from "react"
import {Link} from "react-router-dom"

import  '../VaccineButtonsContainer/VaccineButtons.css'

export function VaccineButtons(){
   
    
    return(
        <>
        <div className="vaccine_sidebar">
        <h1 className="h1_vaccine"> Categories</h1>
        <div>
           <Link to="/" ><button  className="button_b">All Vaccine</button></Link> 
           </div>
          <div>
           <Link to="/covidgraph"><button  className="button_b">Covid Dashboard</button></Link> 
           </div>
           
           <div>
           <Link to="/fda"><button  className="button_b">FDA Apprrove</button></Link>
           </div>
           <div>
           <Link to="/phase1"><button  className="button_b">Phase I</button></Link>
           </div>
           <div>
           <Link to="/news"><button  className="button_b">News</button></Link>
           </div>
           <div>
           <Link to="/countries"><button  className="button_b">Countries</button></Link>
           </div>
           <div>
           <Link to="/covidCasesData"><button  className="button_b">CovidCases</button></Link>        
          </div> 
          
        
        </div>
        </>
    )

}