import './App.css';
import coverImage from  './sabiq.jpg'

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

        <div className='bottom-contianer'>
          <div>
            <h1>FULL STACK</h1>
            <h3 style={{ marginBottom: 15 }}>[ React Js, React Native, Next Js, Node Js, Mongo db, Express Js ]</h3>
            <h1>DEVELOPER</h1>
          </div>
          <div>
            <img src={coverImage} className="cover-image" />
          </div>
          <div className="name-block">
            <h1>SABIQ</h1>
            <h1>THOTTOLY</h1>
            <h1>BAHSEER</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
