import React from 'react';
import movies from '../../movies'
import './MoviesList.css'
import Movie from './Movie/Movie'

const MoviesList = () => {
    return(
        <div className="Movieslist">
            {movies.map((moviesDetail)=> {
                return (
                <div>
                <Movie moviesDetail={moviesDetail}/>
                </div>
                )
            })}
        </div>
    )
}





export default MoviesList;