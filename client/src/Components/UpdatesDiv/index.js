import React from 'react';
import UpdateDivPic from '../../Images/UpdateDivPic.webp';
import './style.css'
import { Card } from '@material-ui/core'

function UpdatesDiv () {
    return(
        <div>
            {/* <div>
                <a target='_blank' href='https://jamanetwork.com/journals/jama/fullarticle/2787240'>
                    <img src={UpdateDivPic} className='updateContainer' />
                </a>
                <div className='updateText'>
                    <h1>Click image to view full article</h1>
                </div>
            </div> */} 
            <div className='clipboardContainer'>
                <img src='https://d1wedsacc4lfnu.cloudfront.net/clipboardFinal.png' className='clipboard' />
            </div>
            <Card className='containerZ2'>
                <h1>
                    Mammogram Before or After Well Woman's Exam?
                </h1>
                <hr />
                <h3>
                    If you call our office to schedule your Well Woman's exam, 
                    we will ask you to wait to get your mammogram until after 
                    your appointment. Please let us know if you have concern
                    regarding your breast exam. There are good reasons that we 
                    ask you to wait. <br /><br />The first being we want to make sure we order
                    the correct MMG. If you have a history of an abnormal MMG or your
                    exam is abnormal, we will order a diagnostic MMG / ultrasound or 
                    Automated Breast Ultrasound (ABUS). So, we can avoid additional cost 
                    and/or radiation if the wrong test is ordered. <br /> <br />ABUS is ordered with MMG 
                    when you have dense breasts and is covered by most insurances. Your 
                    exam is important to what test we order. Our goal is to provide best 
                    care for you and avoid additional trips, costs, and potential radiation.
                </h3>
            </Card>
            <hr />
            <Card className='devMessage'>
                <div className='centeredText'>
                    <h6>
                        This website is still under development. 
                        If you have any comments or issues with the site, please contact Trace Suiter at t.suit@utexas.edu. 
                        You can also send your pictures to this email to be added to the gallery on this website.
                        In the subject of the email, please mention 'Pineywoods Website' to help me distinguish your email.
                        Thanks for visiting!
                    </h6>
                </div> 
            </Card>
        </div>
    )
}

export default UpdatesDiv;