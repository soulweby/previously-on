import React from 'react'

export default function SerieDetail({movie, modal, modalStatut}) {
  return (
    <div className={`serie ${modalStatut && "open"}` }>
    <div className='serieBanner'>
    <div className='serieContent'>
        {/* <h3 className='serieTitle'>{movie?.title || movie.name || movie?.original_title}</h3> */}
        <p>
        <h4>Synopsis:</h4>{movie?.description} 
        </p>
        <h5>Saison : {movie.seasons}</h5>
        {/* <h4>Episodes: {movie.seasons_details}</h4> */}
    </div>
    <button className="serieClose" onClick={modal}>X</button>

    </div>

    </div>
  )
}
