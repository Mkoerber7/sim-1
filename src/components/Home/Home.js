import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            shelves: ['A', 'B', 'C', 'D']
        };
    }


    render() {
        let displayShelves = this.state.shelves.map((curr, index, key) => (
            <Link className="btn bin-links" to={`/shelves/${curr}`} key={index}><h3 key={index}>Shelf {curr}</h3></Link>        
        ));
        return (
            <div className="box">
              {displayShelves}
            </div>
            
        )
    }
}