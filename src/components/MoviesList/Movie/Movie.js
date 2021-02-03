import propTypes from 'prop-types';
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Movie.css';
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";


const initialValues = {
  title: "",
  movie_url: "",
  overview: ""
}

const onSubmit = values => {
  console.log('Form data', values)
}

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  movie_url: Yup.string().required('Required'),
  release_date: Yup.date().required('Required'),
  overview: Yup.string().required('Required')
})

function FormModal () {
return (
  <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>

    <Form>
    <div className="form-control">
      <label htmlFor='title'>TITLE</label>
      <Field
          type="text"
          name="title"
          id="title"
        />
      <ErrorMessage name='title' />
    </div>

    <div className="form-control">
      <label htmlFor='movie_url'>MOVIE URL</label>
      <Field
          type="url"
          name="movie_url"
        />
      <ErrorMessage name='movie_url' />
    </div>

    <div className="form-control">
      <label htmlFor='release_date'>RELEASE DATE</label>
      <Field
          type="date"
          name="release_date"
        />
      <ErrorMessage name='release_date' />
    </div>

    <div className="form-control">
      <label>OVERVIEW</label>
      <Field
        type="text"
        name="overview"
      />
            <ErrorMessage name='overview' />
    </div>
    <Modal.Footer>
      <Button onSubmit={onSubmit} variant="danger" type="submit">SUBMIT</Button>
      <Button onSubmit={onSubmit} variant="transparent" type="submit">RESET</Button>
    </Modal.Footer>

    </Form>
  </Formik>

)

}

function EditMovieModal(props) {
    return (
        <div>
            <Button className="AddMovie" onClick={props.handleShow}>Edit</Button>    
              <Modal show={props.show} onHide={props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>EDIT</Modal.Title>
              </Modal.Header>
              <Modal.Body><FormModal /></Modal.Body>
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

const Movie = ({ moviesDetail, imageClick}) => {
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    return (
        <div>
            <img alt="img" onClick={() => imageClick(moviesDetail.id)} src={moviesDetail.image}/>
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
  moviesDetail: propTypes.shape({
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    year: propTypes.number.isRequired
  })
}



export default Movie;