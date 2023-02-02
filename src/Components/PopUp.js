// import image from "./Assets/"
import Modal from "./Modal"
export default function PopUp(props){
    const {popUpData} = props
    const buttonContainerStyle={
        alignSelf:"end",
        marginRight: "5px"
    }

    const buttonSrc = require("./images/remove_resize1.png")
    const popUpSrc = require("./images/icon_2_resize1.png")

    return(
        <div className="popup--overlay">

            <div className="popup--container" >
                <div style={buttonContainerStyle}><button onClick={props.handleClose_PopUp}><img src={buttonSrc}/></button></div>
                <h1>{popUpData.title}</h1>
                <p>{popUpData.description}</p>
                <Modal/>
                <img src={popUpSrc}/>
                <br/> <br/>
            </div>

            
        </div>
        
    )
}