import './Search.css';

import Button from 'react-bootstrap/Button';
import React  from 'react'


function Search({handleInput, search}) {
    return (
        <div className="wrap">
            <section className="search">
                <input type="text" 
                className="searchTerm" 
                placeholder="What do you want to watch?" 
                onChange={handleInput} 
                onKeyPress={search}/>
                <Button className="searchButton" variant="danger">SEARCH</Button>
            </section>
        </div>
    )
}


export default Search;
