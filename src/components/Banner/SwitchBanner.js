import React, {useState, useEffect} from 'react';
import movies from '../../movies';

const SwitchBanner = ({switchBannerId, setswitchBanner}) => {
const [movie, setMovie] = useState(null);

useEffect(() => {
    const newMovie = movies.find(movie => movie.id === switchBannerId)
    setMovie(newMovie)
})

const onReset = () => setswitchBanner(false);

    return(
        <div className="Movieslist">
            <div>
                <h1>{movie && movie.description}</h1>
                <button onClick={onReset}>Reset</button> 
            </div>
        </div>
    )
}

export default SwitchBanner;