import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Shelves from './components/Shelves/Shelves';
import Bins from './components/Bins/Bins';

export default (
    <switch>
      <Route exact path='/' component={Home}/>
      <Route path='/shelves/:shelf' component={Shelves}/>
      <Route path='/bins/:id' component={Bins}/>
    </switch>
)
