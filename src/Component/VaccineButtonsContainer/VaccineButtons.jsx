import {React,useState} from "react"
import {Link} from "react-router-dom"
import  '../VaccineButtonsContainer/VaccineButtons.css'

export function VaccineButtons(){
   const [isbar,setIsBar] =  useState(true)
    
   


    return(
        <>
        <p className="side_bar "  onClick={()=>setIsBar(!isbar)}>☰</p>

        {
          isbar ? <div  className="vaccine_sidebar">
        
          <div>
             <Link to="/"  className="link"><h2  className="button_b">Gavi</h2></Link> 
             </div>
          <div>
             <Link to="/vaccinedata" className="link"><h2  className="button_b">All Vaccine</h2></Link> 
             </div>
            <div>
             <Link to="/covidgraph" className="link"><h2  className="button_b">Dashboard</h2></Link> 
             </div>
             
             <div>
             <Link to="/fda" className="link"><h2  className="button_b">FDA Apprrove</h2></Link>
             </div>
             <div>
             <Link to="/phase1" className="link"><h2  className="button_b">Phase I</h2></Link>
             </div>
             <div>
             <Link to="/news" className="link"><h2  className="button_b">News</h2></Link>
             </div>
             <div>
             <Link to="/countries" className="link"><h2  className="button_b">Countries</h2></Link>
             </div>
             <div>
             <Link to="/covidcases" className="link"><h2  className="button_b">CovidCases</h2></Link>        
            </div> 
            <div>
             <Link to="/registration" className="link"><h2  className="button_b">Register</h2></Link>        
            </div> 
          
          </div> :
          null
          
        }
       
     
        </>
    )

}