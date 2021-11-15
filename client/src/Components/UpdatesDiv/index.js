import React from 'react';
import BackgroundDiv from '../../Images/updateBG.png';
import './style.css'

function UpdatesDiv () {
    return(
        // <div className='jack'>
            
        // </div>
        <div className='containerZ'>
            <img src={BackgroundDiv} className='nathaniel' />
            <div className='centeredText'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
        </div>
    )
}

export default UpdatesDiv;