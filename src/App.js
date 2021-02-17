import lizning from './lizning.jpg';
import lizning2 from './lizning2.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import Marquee from "./Marquee";
import './App.css';
import './Components/Grid.js';
import CenteredGrid from './Components/Grid.js';
// import { Typography } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lizning} className="App-logo" alt="logo" />
        <h2>
          LIZ & NING'S WEDDING <br />
          <strong>10 APRIL 2021 <br />
          9:45 AM</strong>
        </h2>
        <Marquee string="Welcome! You have arrived at this awesome page. Please RSVP if you haven't, you beautiful sly dawg you."/>
        {/* <marquee bgcolor="#FF0000" scrolldelay="50" scrollamount="10" truespeed>
          <Typography variant="h2" color='textPrimary'>
            Welcome! You have arrived at our wedding details page. Pls what-apps them if you haven't RSVPed you rascal.
          </Typography>
        </marquee> */}
        <br />
        <CenteredGrid />
      </header>
      <img src={pic4} className="App-pic2" alt="logo" />
      <img src={lizning2} className="App-pic3" alt="logo" />
      <p>
        we love u
      </p>
      <img src={pic2} className="App-pic3" alt="logo" />
      <img src={pic3} className="App-pic4" alt="logo" />
      <img src={pic5} className="App-pic5" alt="logo" />
      <img src={pic6} className="App-pic4" alt="logo" />
      <img src={pic7} className="App-pic2" alt="logo" />
      <p>
        b/w photos by Jiehao
      </p>
    </div>
  );
}

export default App;
