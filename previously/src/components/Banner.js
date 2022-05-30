import React from 'react'
import { useState, useEffect } from "react";
import api from "../api"

export default function Banner() {

  const [series, setseries] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      let result = await api.get('https://api.betaseries.com/movies/random')
      console.log(result.data.movies);
      let finalResult = result.data.movies;
      setseries(finalResult)
    }
    fetchData();
  }, []);

  const bannerStyle = {
    backgroundImage: `url("${series.map((serie) => (
      serie.backdrop || serie.poster
    ))}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }

  const truncateText = (string, n) => {
    return string?.length > n
    ? string.substr(0, n-1) + "..."
    : "No description";
  }
  return (
    <header >
        <div className='banner'  style={bannerStyle}>
        { series.map((serie, index) => (
          <div key={index}  className='banner-content' >
            <h1 className='banner-title'>{serie.title}</h1>
            <p className='banner-description'>
                {truncateText(serie?.synopsis, 100)}
            </p>
            <div className='banner-buttons'>
              <button className='banner-button banner-button-play' >Lecture</button>
              <button className='banner-button'>Plus d'infos</button>
            </div>
          </div>
      
              ))}
        </div>
    </header>
  )
}
