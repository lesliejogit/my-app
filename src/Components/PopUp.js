export default function PopUp(props){
    const {height, width} = props.windowDimensions

    const middleWidth = width/ 2
    const middleHeight = height/ 2

    console.log("middle width: ", middleWidth)
    console.log("middle height: ", middleHeight)

    // Sets div inside the middle
    const stylesheet ={
        position: "fixed",
        left: middleWidth,
        top: middleHeight,
        alignSelf: "center",
        justifySelf: "center",
        backgroundColor: "black"
        

    }


    // console.log("Height: ", middleHeight)
    return(
        <div className="popup--container" style={stylesheet}>
            <div>Title</div>

        </div>
    )
}