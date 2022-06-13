import React from 'react'
export default function Card({movie, modal, modalStatut}) {


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
    <button className='banner-button'  onClick={modal}> Ajouter  💝</button>
    </div>
  )
}
