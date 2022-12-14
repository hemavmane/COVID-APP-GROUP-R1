import { useState, useEffect } from 'react'
import axios from "axios"

import '../NewsCovid/News.css'

export  function News() {
const [newsi,setNews] = useState({})

useEffect(()=>{
     axios.get(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0`,{
      headers: {
        'X-RapidAPI-Key': '8c0c5645f4msh17b4e89de7b874ap10eb20jsn3e95f4dad049',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
     }).then(res=>{
          
          setNews({...res.data})
     })
},[])
  
  

  return (
    <div className='all_news'>
    
           {
            newsi.news?.map((news_Data)=>{
              return(
                <div key={news_Data.news_id}>
                  <p>{news_Data.pubDate}</p>
                  <img className='news_img' src={news_Data.urlToImage} alt="" />
                </div>
              )
            })
           } 
    </div>
  )
}
