
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button className="open-button" onClick={togglePopup}>Open</button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Hello world</h2>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
