/* eslint-disable no-unused-vars */
//the main js file intentionally kept simple for ease of reading.

import './App.css'
import { Navbar } from 'react-bootstrap'
import Scorecard from  './components/Scorecard'
import Rules from './components/Rules'
import BannerAd from './components/BannerAd'
import DevelopedBy from './components/DevelopedBy'


function App() {


  return (
    <div>
      <header className="App-header">
        <Rules />
      </header>
        <BannerAd />
        <Scorecard />
        <footer>
        <DevelopedBy />
        </footer>

      </div>
  )
}

export default App;
