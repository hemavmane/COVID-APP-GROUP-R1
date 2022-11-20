import React, { useState, useEffect } from "react";
import axios from "axios";


export function Fda() {
  const [fda, setFda] = useState([]);

  useEffect(() => {
    axios
      .get( `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines`,
        {
             headers: {
            'X-RapidAPI-Key': '8c0c5645f4msh17b4e89de7b874ap10eb20jsn3e95f4dad049',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
          },
        }
      )
      .then(res => {
        console.log(res.data);
        setFda([...res.data]);
      });
  }, []);

  return (
    <>
      <div className="all1">
        <h1>All Vaccines </h1>
        <div className="heading_vaccine1">
          <h3 className="all_h31 Co1">Company ▼</h3>
          <h3 className="all_h31 pha1">Phase ▼</h3>
          <h3 className="all_h131 Cat1">Category ▼</h3>
          <h3 className="all_h131 Cat1">Description▼</h3>
        </div>
        <table className="All_vaccine_sidebar1">
          <div className="vaccine_data_body">
            <tbody>
              {fda.map(i => {
                return (
                  <tr key={i.id} className="vaccine_details_container1">
                    <td className="developerResearcher_data1">{i.developerResearcher} </td>
                    <td className="phase_data1">{i.phase}</td>
                    <td className="category_data1">{i.category}</td>
                    <td className="description_data1">{i.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </div>
        </table>
      </div>
    </>
  );
}