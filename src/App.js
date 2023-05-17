//the main js file intentionally kept simple for ease of reading.

import './App.css'
import { Navbar } from 'react-bootstrap'
import Scorecard from  './components/Scorecard'
import Rules from './components/Rules'


function App() {

  return (
    <div>
      <header className="App-header">
        <Rules />
      </header>
        <Scorecard />
        <div>
          <Navbar.Text>
          <a 
            className='developed-by'
            href="http://jifwalker.com" 
            target='_blank'
            rel='noopener noreferrer'
            alt="Link to developer page">
              Developed By: James Walker
          </a>
          </Navbar.Text>

        </div>
      </div>
  )
}

export default App;
