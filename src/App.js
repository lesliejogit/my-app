import './App.css';
import {useState} from "react";
import Schedule from './Components/Schedule';
import Modal from './Components/Modal';

function App() {
  const[openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
      <h1>Schedule Alerts</h1>
      <Schedule/>
      </header>
      <button 
        id='openModalBtn'
        onClick={()=>{setOpenModal(true);}}
        >Get Notified!</button>

      {openModal&& <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
