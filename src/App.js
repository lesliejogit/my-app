import './App.css';
import {nanoid} from "nanoid"
import {useState} from "react"
import scheduleData from "./Components/Data/scheduleData.json"
import Schedule from './Components/Schedule';

function App() {

  const {workshopData,tentativeScheduleData} = scheduleData
  
  const [saturdaySchedule,setSaturdaySchedule] = useState(() =>{
    const {saturdayData} = tentativeScheduleData
    return saturdayData.map(data => ({
      ...data,
      isClicked: false,
      id: nanoid()
    }))
  })
  const [sundaySchedule, setSundaySchedule] = useState(() =>{
    const {sundayData} = tentativeScheduleData
    return sundayData.map(data => ({
      ...data,
      isClicked: false,
      id: nanoid()
    }))
  })

  console.log("Saturday Schedule: ", saturdaySchedule)
  console.log("Sunday Schedule: ",sundaySchedule)

  const handleClick = (event) =>{
    const target = event.currentTarget // * gets target, and its attributes
    const {id} = target // ! ID of schedule

    setSaturdaySchedule(prevSaturdaySchedule => {
      return prevSaturdaySchedule.map(schedule =>({
        ...schedule,
        isClicked: schedule.id === id ? !schedule.isClicked : schedule.isClicked
      }))
    })

    setSundaySchedule(prevSundaySchedule => {
      return prevSundaySchedule.map(schedule =>({
        ...schedule,
        isClicked: schedule.id === id ? !schedule.isClicked : schedule.isClicked
      }))
    })
  }



  return (
    <div className="App">
      <header className="App-header">
      <h1>Schedule Alerts</h1>
      <Schedule 
      workshopData={workshopData} 
      saturdaySchedule={saturdaySchedule}
      sundaySchedule={sundaySchedule}
      handleClick={handleClick}
      nanoid={nanoid}
      />

      </header>
    </div>
  );
}

export default App;
