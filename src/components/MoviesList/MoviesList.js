import React from 'react';
import movies from '../../movies'
import './MoviesList.css'
import Movie from './Movie/Movie'


const MoviesList = ({setBannerId, setswitchBanner}) => {

    const imageClick = (id) => {setswitchBanner(true) 
    setBannerId(id)
    }
    
    return(
        <div className="Movieslist">
            {movies.map((moviesDetail)=> {
                return (
                <div>
                <Movie moviesDetail={moviesDetail} imageClick={imageClick}/>
                </div>
                )
            })}
        </div>
    )
}





export default MoviesList;