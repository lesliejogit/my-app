export default function Schedule(props){
    const generateWorkshopEvents = () =>{
        const numEvents = 5
        const sampleData = []
        const sampleEvent = {
            time: "00:00AM",
            event:{
                title:"Python Competetion",
                category: "Coding Competetion"
            },
            description: "Show off your python Skills in a collaborative project. Up to 5 team members using the python programming language",
            location: "Room 402"
        }
    
        for (let i=0;i<numEvents; i++){
            sampleData.push(sampleEvent)
        }
    
        return sampleData
    }


    const generateTentativeSchedule = () =>{
        
    }

    /*
    schedule--event --> event--container
    time --> event--time
    title --> event--title ...
    */
    
    const sampleEvents = generateWorkshopEvents().map(table => (
        <div className="event--table">
            <div className="event--container">
                <div className="event--time">{table.time}</div>
                <div className="event--title"><b>{table.event.title}</b> <br/> {table.event.category}</div>
                <div className="event--description">{table.description} </div>
                <div className="event--location"> <h2>{table.location}</h2></div>
            </div>
        </div> 
    ))

    
    return (
        sampleEvents
    )
  }
