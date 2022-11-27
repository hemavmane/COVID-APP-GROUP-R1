
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
             <Link to="/" ><h2  className="button_b">Gavi</h2></Link> 
             </div>
          <div>
             <Link to="/vaccinedata" ><h2  className="button_b">All Vaccine</h2></Link> 
             </div>
            <div>
             <Link to="/covidgraph"><h2  className="button_b">Covid Dashboard</h2></Link> 
             </div>
             
             <div>
             <Link to="/fda"><h2  className="button_b">FDA Apprrove</h2></Link>
             </div>
             <div>
             <Link to="/phase1"><h2  className="button_b">Phase I</h2></Link>
             </div>
             <div>
             <Link to="/news"><h2  className="button_b">News</h2></Link>
             </div>
             <div>
             <Link to="/countries"><h2  className="button_b">Countries</h2></Link>
             </div>
             <div>
             <Link to="/covidcasesdata"><h2  className="button_b">CovidCases</h2></Link>        
            </div> 
           
          
          </div> :
          null
          
        }
       
     
        </>
    )

}