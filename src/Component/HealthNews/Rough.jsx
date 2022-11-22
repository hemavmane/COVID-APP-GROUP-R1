import axios from "axios";
import React, { useEffect, useState } from "react";

// const baseURL = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent";

const Rough=()  => {
  const [post, setPost] =useState([]);

useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
        headers: {
          'X-RapidAPI-Key': '69b56f0544mshe1d9f75b422a4e7p142f81jsn40c4bc0c5681',
          'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
  }, []);
//   if (!post) return null;

  return (
    <div>
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}
    </div>
  );
}
export default Rough;