import './Banner.css'
import Button from 'react-bootstrap/Button';
import Search from './Search/Search'
import React from 'react';
import { background } from './Styles';

function Example() {
    return (
        <div>
            <Button style={background} className="AddMovie">+ ADD MOVIE</Button>
            <img className="logo-nav" src={"https://www.freepnglogos.com/uploads/netflix-logo-0.png"}/>
        </div>
        
    );
  }

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-content">
                <Example />
                <Search />
            </div>
        </div>
    )
}

export default Banner;