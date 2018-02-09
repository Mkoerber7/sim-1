import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Shelves extends Component {
    constructor() {
        super();

        this.state = {
            bins: ['1', '2', '3', '4', '5']
        };
    }


    render() {
        let displayBins = this.state.bins.map((curr, index, key) => (
            <Link className="btn bin-links" to={`/bins/${curr}`} key={index}><h3 key={index}>Bin {curr}</h3></Link>        
        ));
        return (
            <div>
             {displayBins}
            </div>
        )
    }
}