import './Search.css';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'

class Search extends Component {
    constructor() {
        super()
        this.state ={
            browse: 'FIND YOUR MOVIE'
        }
    }

    render() {
        return (
            <div className="wrap">
               <h1>{this.state.browse}</h1>
               <div class="search">
                    <input type="text" class="searchTerm" placeholder="What do you want to watch?"/>
                    <Button className="searchButton" variant="danger">SEARCH</Button>
               </div>
            </div>
        )
    }
}


export default Search; 
