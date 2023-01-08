import React from 'react'

export const MovieCard = ({movie}) => {
  return (

    <div className='movie'>
    
        <div>{movie.Year}</div>
        <div>
          <img src={movie.Poster !=="N/A" ? movie.Poster:"https://files.prokerala.com/movies/assets/img/no-poster-available.jpg"}/>
        </div>
        <div>
        <span>{movie.Type}</span>
          <h2>{movie.Title}</h2>

        </div>

  
      </div>
    
  )
}


export default MovieCard
