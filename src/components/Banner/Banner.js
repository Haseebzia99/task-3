import './Banner.css'
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { background } from './Styles';
import { Modal } from "react-bootstrap";
import FormModal from '../Form/FormModal';
import Search from './Search/Search'
import {connect} from 'react-redux'
import { render } from '@testing-library/react';

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
    render() {
    const {loading} = this.props; 
    return(
        <div className="banner">
            <div className="banner-content">
                <Search />
                {loading ? <MainBannner/> : <SwitchBanner/>}
                <AddMovie />
            </div>
        </div>
    )
}
}
const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Banner);