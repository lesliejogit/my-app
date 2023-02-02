export default function Modal(){
    let discordImg = require("./images/discord.png")
    let googleImg = require("./images/google_resize3.png")

    // let googleImg =``
    return(
        <>
            <h2>Get Notified</h2>
            <div id="modal--container"style={{display:"flex", justifyContent:"center"}}>
                <a>
                    <img src={discordImg}  />
                    <h3>Discord</h3>
                </a>
                <a>
                    <img src={googleImg} />
                    <h3>Google</h3>
                </a>
            </div>
        </>
    )
}