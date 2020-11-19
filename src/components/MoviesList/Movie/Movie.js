import React from 'react'

const Movie = ({moviesDetail}) => {
    return (
        <div>
            <img src={moviesDetail.image}/>
            <h1>{moviesDetail.title}</h1>
            <p>{moviesDetail.genre}</p>  
            <p>{moviesDetail.year}</p>         
        </div>
    )
}

export default Movie
