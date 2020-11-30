import React from 'react'
import './Results.css'

function Result(result) {
    return (
        <div className="result">
            <img alt="img" src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
