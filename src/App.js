import React from 'react';
import './App.css';
import General from './Components/General';
import Work from './Components/Work/Work';
import Education from './Components/Education/Education';
import SaveBtn from './Components/Buttons/SaveBtn'



function App() {
  return (
    <div className="App">
      <div className="save-cv-container">
        <SaveBtn />
      </div>
      <div className="gen-info-section">
        <General />
      </div>
      <div className="work-section">
        <Work />
      </div>
      <div className="education-section">
        <Education />
      </div>
      
    </div>
  );
}

export default App;
