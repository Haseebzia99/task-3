import './Footer.css'
import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
        };
    }
    
    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render () {
        return (
            <div class="footer">
            <h2> {this.state.date.toLocaleTimeString()} </h2>
            <button onClick={this.tick}>Update</button>
             <img className="logo" src={"https://www.freepnglogos.com/uploads/netflix-logo-0.png"}/>
            </div>
        );
    }
}

export default Footer
