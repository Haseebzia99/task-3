import './Banner.css'
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { background } from './Styles';
import { Modal } from "react-bootstrap";
import FormModal from '../Form/FormModal';
import Search from './Search/Search'
import axios from 'axios'
import Results from './Search/Results'

function AddMovie() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Button style={background} className="AddMovie" onClick={handleShow}>+ ADD MOVIE</Button>
            <img className="logo-nav" alt='img' src={"https://www.freepnglogos.com/uploads/netflix-logo-0.png"}/>
              <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>ADD MOVIE</Modal.Title>
              </Modal.Header>
              <Modal.Body><FormModal/></Modal.Body>
            </Modal>
        </div>
      )
    };


const Banner = () => {

const search = (e) => {
    if (e.key === "Enter") {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
            return { ...prevState, results: results }
        })
    });
  }
}

const [state, setState ] = useState({
    s: "",
    results: [],
    selected: {}
});

const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=80cad683"

const handleInput = (e) => {
    let s = e.target.value;

 setState(prevState => {
     return {...prevState, s: s}
 })
}


    return(
        <div className="banner">
            <div className="banner-content">
                <Search handleInput={handleInput} search={search}/>
                <Results results={state.results} />
                <AddMovie />
            </div>
        </div>
    )
}

export default Banner