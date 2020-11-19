import './Banner.css'
import Button from 'react-bootstrap/Button';
import Search from './Search'
import Modal from 'react-modal';
import React, { useState } from 'react';
import { background } from './Styles';

function Example() {
    return (
        <Button style={background} className="AddMovie">
            + ADD MOVIE
        </Button>
    );
  }

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-text">
                <Example />
                <Search />
            </div>
        </div>
    )
}

export default Banner;