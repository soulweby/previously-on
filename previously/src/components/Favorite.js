import React from 'react'
import { useState, useEffect } from "react";
import api from "../api"
import Card from './Card';

export default function Favorite() {
  const [fav, setFav] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      let result = await api.get("https://api.betaseries.com/shows/discover")
      // console.log(result.data.shows);
      let finalResult = result.data.shows;
      console.log(finalResult);
      setFav(finalResult)
    
    }

    fetchData();
  }, []);
  return (
    <div className='favorite'>
    Favorite
    <div className='result'>
        {fav.map((movie, index) => (
        <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  )
}


// https://api.betaseries.com/shows/favorites