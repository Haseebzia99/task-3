import propTypes from 'prop-types';
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Movie.css';

function EditMovieModal(props) {
    return (
        <div>
            <Button className="AddMovie" onClick={props.handleShow}>Edit</Button>    
              <Modal show={props.show} onHide={props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>EDIT</Modal.Title>
              </Modal.Header>
              <Modal.Body>Form will be installed here</Modal.Body>
              <Modal.Footer>
                <Button variant="transparent" onClick={props.handleClose}>
                  RESET
                </Button>
                <Button variant="danger" onClick={props.handleClose}>
                  SUBMIT
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    );
  }

  function DeleteMovieModal(props) {
    return (
        <div>
            <Button className="AddMovie" onClick={props.handleShow}>Delete</Button>    
              <Modal show={props.show} onHide={props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>DELETE</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={props.handleClose}>
                  CONFIRM
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    );
  }

const Movie = ({moviesDetail}) => {
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    return (
        <div>
            <img src={moviesDetail.image}/>
            <div className="modals">
                <EditMovieModal show={showEdit} handleClose={handleCloseEdit} handleShow={handleShowEdit}/>
                <DeleteMovieModal show={showDelete} handleClose={handleCloseDelete} handleShow={handleShowDelete}/>
            </div>
            <h1>{moviesDetail.title}</h1>
            <p>{moviesDetail.genre}</p>  
            <p>{moviesDetail.year}</p>
        </div>
    )
}

Movie.propTypes = {
    name: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    year: propTypes.number.isRequired
}

export default Movie