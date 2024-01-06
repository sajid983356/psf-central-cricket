
// import {Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Headers from './Components/Hearders'

// import Home from './Components/Home';
import CricketTeam from './Components/CricketTeam';
import ContactUs from './Components/ContactUs';



function App() {
  return (
    <Router>
        <div>
          <Headers />
          <div className='container mt-3'>
            <Routes>
              <Route path='/' Component={CricketTeam}/>
              <Route path='/cricket-team' Component={CricketTeam}/>
              <Route path='/join-us' Component={ContactUs}/>
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
