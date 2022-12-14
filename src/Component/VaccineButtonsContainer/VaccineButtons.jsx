
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
           <Link to=""><button  className="button_b">Replicating Viral vector</button></Link>
           </div>
           <div>
           <Link to=""><button  className="button_b">Non-Replicating Viral vector</button></Link>        
          </div> 
          <div><Link to=""><button  className="button_b">Protien subunit</button></Link>
          </div>
          <div>
          <Link to=""><button  className="button_b">Replicating bacterial vector</button></Link>
          </div>
          <div>
          <Link to=""><button  className="button_b">Virus Like Particales</button></Link>
          </div>
        </div>
        </>
    )

}