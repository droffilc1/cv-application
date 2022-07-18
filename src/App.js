import './App.css';

function App() {
  return (
    <div className="App">
      <div className="save-cv-container">
        <SaveBtn />
      </div>
      <div className="gen-info-section">
        <GeneralInfo />
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
