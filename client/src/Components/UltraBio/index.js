import React from 'react';
import ProfilePics from '../../ProfilePics';
import { Card, Button } from '@material-ui/core';
import './style.css';

function UltraBio () {
    return(
    <div>
        <div className='row'>
            <div className='col-md-6'>
                <img src={ProfilePics.SuiterUltrasound} className='suiterultrasoundpic'/>
            </div>
            <div className='col-md-6 duke'>
                
                <div className='ultraDiv mx-auto'>
                <div className='ultraText'>
                <p>Dr. Suiter is accredited by the American Institute of Ultrasound
                Medicine and Nuchal Translucency and Quality Review Program. She
                performs her own ultrasound, as this is a part of her job she 
                genuinely loves. Rather than waiting for a report days later, you 
                will be able to receive Dr. Suiter's assessment during the ultrasound.
            </p>
            <p>
                Dr. Suiter strives for good pictures and has 3D/4D capabilities. 
                You will view the ultrasound on a large flat screen and can have 
                pictures emailed to you. Dr. Suiter performs ultrasounds for her 
                colleagues at request. If you are not a patient but would desire
                an ultrasound, you can request an order for an ultrasound from 
                your provider.
            </p>
                </div>   </div>
                <Button variant='contained' className='ultraBtn' color='success' size='large'>
                    Please call us at 936-699-7575 for a consultation appointment.
                </Button>
            </div>
        </div>
    </div>
    )
}

export default UltraBio;