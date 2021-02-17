import lizning from './lizning.jpg';
import lizning2 from './lizning2.jpg';
import './App.css';
import './Components/Grid.js';
import CenteredGrid from './Components/Grid.js';
import { Typography } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lizning} className="App-logo" alt="logo" />
        <p>
          LIZ & NING'S WEDDING
        </p>
        <marquee bgcolor="#FF0000" scrolldelay="50" scrollamount="10" truespeed>
          <Typography variant="h2" color='textPrimary'>
            Welcome! You have arrived at our wedding details page. Pls what-apps them if you haven't RSVPed you rascal.
          </Typography>
        </marquee>
        <br />
        <CenteredGrid />
      </header>
      <img src={lizning2} className="App-pic2" alt="logo" />
    </div>
  );
}

export default App;
