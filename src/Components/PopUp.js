// import image from "./Assets/"
export default function PopUp(props){
    const {popUpData} = props
    return(
        <div className="popup--overlay">

            <div className="popup--container" >
                <h1>{popUpData.title}</h1>
                <p>{popUpData.description}</p>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <h3 style={{paddingRight:"10px"}}>Time {popUpData.time}</h3>
                    <h3>Location:{popUpData.location}</h3>
                </div>
                <img src={require("./images/icon_2_resize1.png")}/>
                <br/> <br/>
                <button onClick={props.handleClose_PopUp}>Close Window</button>
            </div>

            
        </div>
        
    )
}