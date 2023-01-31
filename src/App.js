import './App.css';
import scheduleData from "./Components/Data/scheduleData.json"
import Schedule from './Components/Schedule';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Schedule Alerts</h1>
      <Schedule workshopData={scheduleData.workshopData} tentativeSchedule={scheduleData.tentativeSchedule}/>

      </header>
    </div>
  );
}

export default App;
