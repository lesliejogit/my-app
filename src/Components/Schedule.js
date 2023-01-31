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


        
        return (
        <div className="tentativeSchedule--container"> 
            <div className="tentativeSchedule--column">
                <h2>Saturday</h2>
                <div className="event--table">
                    <div className="event--container">
                        <div className="event--time">time</div>
                        <div className="event--title"><b>Python Competetion</b> <br/> category</div>
                        <div className="event--location"> <h3> location</h3></div>
                    </div>
                </div>

                <div className="event--table">
                    <div className="event--container">
                        <div className="event--time">time</div>
                        <div className="event--title"><b>title</b> <br/> category</div>
                        <div className="event--location"> <h3> location</h3></div>
                    </div>
                </div>
            </div>
            
            <div className="tentativeSchedule--column">
                <h2>Sunday</h2>
                <div className="event--table">
                    <div className="event--container">
                        <div className="event--time">time</div>
                        <div className="event--title"><b>title</b> <br/> category</div>
                        <div className="event--location"> <h3> location</h3></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    /*
    schedule--event --> event--container
    time --> event--time
    title --> event--title ...
    */
    
    const sampleEvents = props.workshopData.map(table => (
        <div className="event--table">
            <div className="event--container">
                <div className="event--time">{table.time}</div>
                <div className="event--title"><b>{table.title}</b> <br/> {table.category}</div>
                <div className="event--description">{table.description} </div>
                <div className="event--location"> <h3>{table.location}</h3></div>
            </div>
        </div> 
    ))

    const tentativeSchedule = generateTentativeSchedule()

    
    return (
        <div>
            <h2>Tentative Schedule</h2>
            {tentativeSchedule}

            <h2>Workshop Events</h2>
            {sampleEvents}
        </div>
    )
  }
