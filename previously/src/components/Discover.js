import React from 'react';
import { useState, useEffect } from "react";
import api from "../api"
import Card from './Card';


export default function Discover() {

  //Clé API :2df01f59dc89
  //Clé secrète (pour OAuth 2.0) : 
  // "access_token": "02c0567faad4" 

  const [movies, setmovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await api.get("https://api.betaseries.com/shows/discover")
      // console.log(result.data.shows);
      let finalResult = result.data.shows;
      setmovie(finalResult)
    }

    fetchData();
  }, []);

  console.log("souley");
  return (

    <div>

    <h2 className='btn'>les series a decouvrir</h2>
      <div className='result'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
