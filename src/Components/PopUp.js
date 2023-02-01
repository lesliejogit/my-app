export default function PopUp(props){

    
    const stylesheet ={
        position: "absolute",
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        transform: `translate(${window.innerWidth / 2},${window.innerHeight / 2})`

    }

    return(
        <div className="popup--container" style={{stylesheet}}>
            <div>Title</div>
            <div>Time</div>
            <div>Location</div>
        </div>
    )
}