import React from 'react'

export default function SerieDetail({movie, modal, modalStatut}) {
  return (
    <div className={`serie ${modalStatut && "open"}` }>
    <div className='serieBanner'>
    <div className='serieContent'>
        <h3 className='serieTitle'>{movie?.title || movie.name || movie?.original_title}</h3>
        <p>
        {movie?.overview} 
        </p>
    </div>
    <button className="serieClose" onClick={modal}>X</button>

    </div>

    </div>
  )
}
