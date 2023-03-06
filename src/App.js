
import './App.css'
import Scorecard from  './components/Scorecard'
import Rules from './components/Rules'

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <p>birdie time pub scorecard</p>
       <Rules />
      </header>
      <div>
        <Scorecard />
      </div>
    </div>

      </div>
  )
}

export default App;
