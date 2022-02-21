import React, { Component } from 'react';
import './App.css';
import './Components/Grid.js';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import Portfolio from './Components/portfolio.js';
import Contact from './Components/contact.js';
import Wedding from './Components/wedding.js';
// import { Typography } from '@material-ui/core';

class App extends Component {
render() {
  return (
    <Router>
           <Routes>
                 <Route path='/' element={< Wedding />}></Route>
                 <Route path='/portfolio' element={< Portfolio />}></Route>
                 <Route path='/contact' element={< Contact />}></Route>
          </Routes>
    </Router>
  );
}
}
export default App;
