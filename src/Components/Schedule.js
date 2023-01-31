export default function Schedule(props){
    const generateEvents = () =>{
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
    
    const sampleEvents = generateEvents().map(table => (
        <div className="schedule--table">
            <div className="schedule--event">
                <div className="schedule--event--time">{table.time}</div>
                <div className="schedule--event--title"><b>{table.event.title}</b> <br/> {table.event.category}</div>
                <div className="schedule--event--description">{table.description} </div>
                <div className="schedule--event--location"> <h2>{table.location}</h2></div>
            </div>
        </div> 
    ))

    
    return (
        sampleEvents
    )
  }
