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
    name: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    year: propTypes.number.isRequired
}

export default Movie