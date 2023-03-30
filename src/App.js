//the main js file intentionally kept simple for ease of reading.

import './App.css'
import Scorecard from  './components/Scorecard'
import Rules from './components/Rules'


function App() {

  return (
    <div>
      <header className="App-header">
        <Rules />
      </header>
        <Scorecard />
      </div>
  )
}

export default App;
