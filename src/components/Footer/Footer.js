import './Footer.css'
import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        };
    }
    
    tick = () => {
        this.seState({
            date: new Date()
        })
    }

    render () {
        return (
            <div className="footer">
            <h2> {this.state.date.toLocaleTimeString()} </h2>
            <button onClick={this.tick}>Update</button>
             <img className="logo" alt="footer--logo" src={"https://www.freepnglogos.com/uploads/netflix-logo-0.png"}/>
            </div>
        )
    }
}

export default Footer;
