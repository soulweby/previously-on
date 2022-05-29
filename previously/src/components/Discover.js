import React from 'react';
import {useState, useEffect} from "react";
import api from "../api"
import axios from "axios"

export default function Discover() {

    //Clé API :2df01f59dc89
    //Clé secrète (pour OAuth 2.0) : 
    // "access_token": "02c0567faad4" 

    const [movie, setmovie] = useState([]);
    useEffect(() => {
       const fetchData = async () => {
           let result = await api.get("https://api.betaseries.com/shows/discover")
           console.log(result.data.shows);
           let finalResult = result.data.shows;

           setmovie(finalResult)
       }

       fetchData();
    }, []);
  return (
    <div>
 
    </div>
  )
}

//https://api.betaseries.com/oauth/access_token?client_id=2df01f59dc89&client_secret=&redirect_uri=http://www.localhost:3000/&code=7ab05d58e78b61e112e58b7d751a42cb
