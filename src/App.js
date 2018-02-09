import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <body>
        
        { routes }

        </body>
        
      </div>
      
    );
  }
}

export default App;
