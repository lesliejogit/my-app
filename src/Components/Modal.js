import React from 'react'
import "./Modal.css"
import logo1 from './img/discord.png';
import logo2 from './img/google.png';


function Modal({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            
            <div className='title'>
                <h1 className='modalTitle'>Where to get Notified</h1>
                <div className='closeBtn'>
                    <button onClick={() => closeModal(false)}> × </button>
                </div>
            </div>
            <div className='body'>
                <div className='option'>
                    <a href="https://beachhacks.com" target="_blank" rel="noreferrer">
                        <img src={logo2} className='logo' id='googleLogo' alt='Google Calendar'/>
                    </a>
                    <h5 id='optionTitle'>Google </h5>
                </div>
                <div className='option'>
                    <a href="https://beachhacks.com" target="_blank" rel="noreferrer">
                        <img src={logo1} className='logo' id='discordLogo' alt='Discord' />
                    </a>
                    <h5 id='optionTitle'>Discord </h5>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Modal
