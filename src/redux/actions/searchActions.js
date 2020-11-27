import {SEARCH_MOVIE, FETCH_MOVIES} from './types'
import axios from 'axios'


export const searchMovie = text => dispatch => {
    dispatch ({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=80cad683')
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
    }))
}