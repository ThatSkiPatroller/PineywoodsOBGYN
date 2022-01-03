import React from 'react';
import ProfilePics from '../../ProfilePics';
import manyLasers from '../../Images/manyLasers.png';
import { Button } from '@material-ui/core';
import './style.css';

function LaserBio () {
    return(
        <div>
            <div className='row'>
                <div className='col-4'>
                    <img src={ProfilePics.Laser} className='laser'/>
                </div>
                <div className='col-8 duke'>
                    
                    <img src={manyLasers} className='manyLasers' />
                    <div className='prinston'>
                    <div className='harvard'>
                        <p><span className='largeText'> 
                        Over the course of a lifetime, every woman feels the effects of childbirth and aging. 
                            With the loss of vaginal tone, lubrication, and elasticity, women can often benefit from CO2RE
                            Intima laser treatments. With the loss of elasticity and tone, women often suffer from stress urinary 
                            Incontinence (loss of urine with movement, cough or sneezing). 
                            We offer a non surgical and non painful 
                            treatment with CO2RE Intima Laser Treatment. CO2RE treatment is a safe and quick (10-15 minutes) non surgical
                            treatment without incisions. It works by delivering controlled (fractional) CO2 energy which stimulates the 
                            formation of collagen thus remodeling the tissue. Patient will recieve a treatment every 3 - 4 weeks for 3 
                            treatments and then a single treatment a year after. 

                            Over the course of a lifetime, </span>every woman feels the effects of childbirth and aging. 
                            With the loss of vaginal tone, lubrication, and elasticity, women can often benefit from CO2RE
                            Intima laser treatments. <br /><br />With the loss of elasticity and tone, women often suffer from stress urinary 
                            Incontinence (loss of urine with movement, cough or sneezing). We offer a non surgical and non painful 
                            treatment with CO2RE Intima Laser Treatment. <br /><br />CO2RE treatment is a safe and quick (10-15 minutes) non surgical
                            treatment without incisions. It works by delivering controlled (fractional) CO2 energy which stimulates the 
                            formation of collagen thus remodeling the tissue. Patient will recieve a treatment every 3 - 4 weeks for 3 
                            treatments and then a single treatment a year after. 
                        </p> 
                    </div>   </div>
                    <Button variant='contained' color='success' size='large'>
                        Please call us at 936-699-7575 for a consultation appointment.
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LaserBio;