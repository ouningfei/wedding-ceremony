import React, { Component } from 'react';
import './App.css';
import './Components/Grid.js';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Portfolio from './Components/portfolio.js';
import Contact from './Components/contact.js';
import Wedding from './Components/wedding.js';
// import { Typography } from '@material-ui/core';

const size = {
  width: '30%',
  height: 90,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

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
