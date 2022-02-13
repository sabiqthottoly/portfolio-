import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        {/* header */}
        <div className="header">
          <h2>Sabiq Thottoly Basheer</h2>
          <div>
            <h2>{`Currently full stack`}</h2>
            <h2>{`devleoper at Challenger App`}</h2>
          </div>
          <div>
            <h2>{`Based in Kerala`}</h2>
            <h2>{`India`}</h2>
          </div>
        </div>
        {/* header */}
        <Home/>

      </div>
    </div>
  );
}

export default App;
