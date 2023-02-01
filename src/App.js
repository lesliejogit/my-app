import './App.css';
import {nanoid} from "nanoid"
import {useState,useEffect} from "react"
import scheduleData from "./Components/Data/scheduleData.json"
import Schedule from './Components/Schedule';
import PopUp from './Components/PopUp';

function App() {

  const handleEventOpen = (event) =>{
    const target = event.currentTarget // * gets target, and its attributes
    const {id} = target // ! ID of schedule
    let eventClicked

    // ! Finds the event clicked by user
    sundaySchedule.find(sundayEvent => {
      if (sundayEvent.id === id){
        eventClicked = sundayEvent
      }
    })

    saturdaySchedule.find(saturdayEvent => {
      if (saturdayEvent.id === id){
        eventClicked = saturdayEvent
      }
    })

    setPopUp({
      ...eventClicked,
      isClicked: true
    })

  }
  
  const {workshopData,tentativeScheduleData} = scheduleData
  const {saturdayData, sundayData} = tentativeScheduleData

  const [popUp,setPopUp] = useState({isClicked:false}) // * initial value
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })


  useEffect( () =>{
    function handleResize(){
      setWindowDimensions( () =>({
        height: window.innerHeight,
        width: window.innerWidth
      }))
    }
    window.addEventListener("resize", handleResize)
  },[])

  console.log("Window Dimensions", windowDimensions)
  console.log("Screen dimension: ", window.screen.width)
  
  // const [saturdaySchedule,setSaturdaySchedule] = useState(() =>{
  //   const {saturdayData} = tentativeScheduleData
  //   return saturdayData.map(data => ({
  //     ...data,
  //     isClicked: false,
  //     id: nanoid()
  //   }))
  // })
  // const [sundaySchedule, setSundaySchedule] = useState(() =>{
  //   const {sundayData} = tentativeScheduleData
  //   return sundayData.map(data => ({
  //     ...data,
  //     isClicked: false,
  //     id: nanoid()
  //   }))
  // })

  const sundaySchedule = sundayData.map(event => ({
    ...event,
    id:nanoid()
  }))

  const saturdaySchedule = saturdayData.map(event => ({
    ...event,
    id:nanoid()
  }))


  return (
    <div className="App">
      <header className="App-header">
      <h1>Schedule Alerts</h1>
      <Schedule 
      workshopData={workshopData} 
      saturdaySchedule={saturdaySchedule}
      sundaySchedule={sundaySchedule}
      handleEventOpen={handleEventOpen}
      nanoid={nanoid}
      />

      {popUp.isClicked && <PopUp windowDimensions={windowDimensions}/>}

      </header>
    </div>
  );
}

export default App;
