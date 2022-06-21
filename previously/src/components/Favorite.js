import React from 'react'
import { useState, useEffect } from "react";
import api from "../api"

export default function Favorite() {
  const [fav, setFav] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      let result = await api.get("https://api.betaseries.com/shows/discover")
      // console.log(result.data.shows);
      let finalResult = result.data.shows;
      setFav(finalResult)
    
    }

    fetchData();
  }, []);
  return (
    <div className='favorite'>Favorite</div>
  )
}


// https://api.betaseries.com/shows/favorites