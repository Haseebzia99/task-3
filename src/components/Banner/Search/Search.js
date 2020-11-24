import './Search.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import useInput from './useInput';

function Search() {
    const [searchInput, bindsearchInput, resetsearchInput] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert('do you want to search ?')
        resetsearchInput()

    }
        return (
            <form onSubmit={submitHandler}>
            <div className="wrap">
                    <h1>FIND YOU MOVIE  </h1>
                    <div className="search">
                            <input 
                            {...bindsearchInput}
                            type="text" 
                            className="searchTerm" 
                            placeholder="What do you want to watch?"/>
                            <Button className="searchButton" variant="danger">SEARCH</Button>
                    </div>
            </div>
            </form>
        )
    }



export default Search; 
