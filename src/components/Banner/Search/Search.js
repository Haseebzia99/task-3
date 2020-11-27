import './Search.css';

import Button from 'react-bootstrap/Button';
import React  from 'react'
import {searchMovie, fetchMovies} from '../../../redux/actions/searchActions'
import {connect} from 'react-redux'


onChange = e => {
    this.props.searchMovie(e.target.value);
};

onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
};



function Search({ handleInput, search }) {
    return (
        <div className="wrap" onSubmit={this.onSubmit}>
            <section className="search">
                <input type="text" 
                className="searchTerm" 
                placeholder="What do you want to watch?" 
                onChange={this.onChange} />
                <Button className="searchButton" variant="danger">SEARCH</Button>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies})(Search); 
