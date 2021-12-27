import React from 'react';
import UpdateDivPic from '../../Images/UpdateDivPic.webp';
import './style.css'

function UpdatesDiv () {
    return(
        // <div className='containerZ'>
        //     <div className='centeredText'>
        //     Please bare with us as this website is still under development. 
        //     If you have any comments or issues with the site, please contact Trace Suiter at t.suit@utexas.edu. 
        //     You can also send your pictures to this email to be added to the gallery on this website.
        //     In the subject of the email, please put 'Pineywoods Site Inquiry' to help me distinguish your email.
        //     </div>
        // </div>
        <div>
            <a target='_blank' href='https://jamanetwork.com/journals/jama/fullarticle/2787240'>
                <img src={UpdateDivPic} className='updateContainer' />
            </a>
            <div className='updateText'>
                <h1>Click on image to view full article</h1>
            </div>
        </div>
    )
}

export default UpdatesDiv;