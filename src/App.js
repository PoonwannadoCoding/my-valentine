import './App.css';
import { useState } from 'react';



function App() {

  const [answer, setAnswer] = useState(0);
  const [isHoveredYes, setIsHoveredYes] = useState(false);
  const [isHoveredNo, setIsHoveredNo] = useState(false);

  const handleButtonClick = (response) => {
    setAnswer(response);
  };

  const handleMouseEnterYes = () => {
    setIsHoveredYes(true);
  };

  const handleMouseLeaveYes = () => {
    setIsHoveredYes(false);
  };

  const handleMouseEnterNo = () => {
    setIsHoveredNo(true);
  };

  const handleMouseLeaveNo = () => {
    setIsHoveredNo(false);
  };

  const imageSize = { height: 400, width: 400 }; // Set the desired image size
  return (
    <div className="App">
      <header className="App-header">
      {answer === 1 ? (
          <img src={require('./img/cat3.gif')} alt="cat3" style={imageSize} />
        ) : answer === 2 ? (
          <img src={require('./img/cat2.gif')} alt="cat2" style={imageSize} />
        ) : (
          <img
            src={isHoveredYes ? require('./img/cat3.gif') : isHoveredNo ? require('./img/cat2.gif') : require('./img/cat1.jpg')}
            alt={isHoveredYes ? "cat3" : isHoveredNo ? "cat2" : "cat1"}
            style={imageSize}
          />
        )}
        <p>
          Will You Be My Valentine?
        </p>
        <div>
          <button 
          onClick={
            () => handleButtonClick(1)}
            onMouseEnter={handleMouseEnterYes}
            onMouseLeave={handleMouseLeaveYes}
            
            >
              Yes
            </button>
          <button onClick={() => handleButtonClick(2)}
          onMouseEnter={handleMouseEnterNo}
          onMouseLeave={handleMouseLeaveNo}
          >
            No
            </button>
        </div>
      </header>
    </div>
  );
}


export default App;
