import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import './FormModal.css'
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";


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

export default FormModal;