import './Banner.css'
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { background } from './Styles';
import { Modal } from "react-bootstrap";
import FormModal from '../Form/FormModal';

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
    return(
        <div className="banner">
            <div className="banner-content">
                <AddMovie />
            </div>
        </div>
    )
}

export default Banner