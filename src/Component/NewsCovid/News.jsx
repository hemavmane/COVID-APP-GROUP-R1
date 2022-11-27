import { useState, useEffect } from "react";
import axios from "axios";

import "../NewsCovid/News.css";

export function News() {
  const [newsi, setNews] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0`,
        {
          headers: {
            "X-RapidAPI-Key":
              "8c0c5645f4msh17b4e89de7b874ap10eb20jsn3e95f4dad049",
            "X-RapidAPI-Host":
              "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          },
        }
      )
      .then(res => {
        setNews({ ...res.data });
      });
  }, []);

  return (
    <div className="all_news">
      <h1>CORONA VIRUS NEWS</h1>
      {newsi.news?.map(({title,news_id,pubDate,link,urlToImage}) => {
        return (
          <div key={news_id} className="news_Container">
              <h1 className="n_tit">{title}</h1>
            <img className="news_img" src={urlToImage} alt="" />
            <p className="date">{pubDate}</p>
            <div> <a href={link} className="link_tomore">link</a></div> 
          </div>
        );
      })}
    </div>
  );
}
