import React from 'react';
import propTypes from 'prop-types';

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

Movie.propTypes = {
    name: propTypes.string,
    title: propTypes.string,
    genre: propTypes.string,
    year: propTypes.number
}

export default Movie