import React from 'react'
import "./Modal.css"
import logo2 from './google.png';
import logo1 from './discord.png';


function Modal({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            
            <div className='title'>
                <h2 className='modalTitle'>Where to get Notified</h2>
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
