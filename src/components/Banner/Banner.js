import './Banner.css'
import Button from 'react-bootstrap/Button';
import Search from './Search/Search'
import React, { useState } from "react";
import { background } from './Styles';
import { Modal } from "react-bootstrap";

function AddMovie() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button style={background} className="AddMovie" onClick={handleShow}>+ ADD MOVIE</Button>
            <img className="logo-nav" src={"https://www.freepnglogos.com/uploads/netflix-logo-0.png"}/>
    
              <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>ADD MOVIE</Modal.Title>
              </Modal.Header>
              <Modal.Body>Form will be installed here</Modal.Body>
              <Modal.Footer>
                <Button variant="transparent" onClick={handleClose}>
                  RESET
                </Button>
                <Button variant="danger" onClick={handleClose}>
                  SUBMIT
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    )
  };

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-content">
                <AddMovie />
                <Search />
            </div>
        </div>
    )
}

export default Banner;