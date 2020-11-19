import React from 'react';
import './Search.css';
import Button from 'react-bootstrap/Button';

const Search = () => {
    return (
        <div class="wrap">
            <h1> FIND YOUR MOVIE </h1>
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What do you want to watch?"/>
                <Button className="searchButton" variant="danger">SEARCH</Button>
            </div>
        </div>
    )
};

export default Search; 