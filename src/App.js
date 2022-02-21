import React, { Component } from 'react';
import lizning from './lizning.jpg';
import lizning2 from './lizning2.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import pic9 from './pic9.jpg';
import pic10 from './pic10.jpg';
import Marquee from "./Marquee";
import './App.css';
import './Components/Grid.js';
import CenteredGrid from './Components/Grid.js';
import SpotifyPlayer from 'react-spotify-player';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Components/home.js';
import About from './Components/about.js';
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
                 <Route path='/about' element={< About />}></Route>
                 <Route path='/contact' element={< Contact />}></Route>
          </Routes>
    </Router>
  );
}
}
export default App;
