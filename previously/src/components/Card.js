import React from 'react'
import { useState } from "react";
import api from '../api';
import SerieDetail from './SerieDetail'
export default function Card({movie}) {

  const [modal, setModal] = useState(false);
  // const [movieId, setMovieId] = useState(movie.id);

  const movieId = movie.id;

  // console.log(movieId);

  const handleModalClick = () => {
    modal ? setModal(false) : setModal(true);
  }

  const addFav = async () => {
    console.log("nou")
    let result = await api.post(`https://api.betaseries.com/shows/show?id=${movieId}`)
    console.log(result);
    return result;
  }

  const Achirv = async () => {
    console.log("oui")
    let result = await api.post(`https://api.betaseries.com/shows/archive?id=${movieId}`)
    console.log(result);
    return result;
  }


  return (
    <div className='card'>
    <h2>{movie.title}</h2>
    <img src={ movie?.images.poster} alt="poster" />
    <p>Genres: {movie.genres.Drama}  {" "}
                        {movie.genres.Crime} {" "}
                        {movie.genres.Horror} {" "}
                        {movie.genres.Anime} {" "}
                        {movie.genres.Adventure} {" "}
                        {movie.genres.Fantasy} {" "}
                        {movie.genres.Animation} {" "}
                        {movie.genres.Science_Fiction} {" "}
                        {movie.genres.Romance} {" "}
                        {movie.genres.Documentary} {" "}
                        {movie.genres.Reality} {" "}
                        {movie.genres.Western} {" "}
                        {movie.genres.Talk_Show} {" "}
                        {movie.genres.Game_Show} {" "}
                        {movie.genres.Thriller} {" "}
                        {movie.genres.Children} {" "}
                        {movie.genres.Family} {" "}
                        {movie.genres.Home_and_Garden} {" "}
                        {movie.genres.Mystery} {" "}
                        {movie.genres.Special_Interest} {" "}
                        {movie.genres.Sport} {" "}
                        {movie.genres.Suspense} {" "}
                        {movie.genres.Travel} {" "}
                        {movie.genres.History} {" "}
                        {movie.genres.Indie} {" "}
                        {movie.genres.Musical} {" "}
                        {movie.genres.Podcast} {" "}
                        {movie.genres.War} {" "}
                        {movie.genres.Martial_Arts} {" "}
                  
    </p>

    <button className='banner-button' onClick={handleModalClick}> ???</button>
    <button className='banner-button light' onClick={() =>addFav()}>Ajouter ????</button>
    <button className='banner-button archiv' onClick={() =>Achirv()}>Archiver ????</button>
    <SerieDetail  movie={movie} modal={handleModalClick} modalStatut={modal}/>
    </div>
  )
}
