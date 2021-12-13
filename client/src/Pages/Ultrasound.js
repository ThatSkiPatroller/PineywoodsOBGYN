import React from 'react';
import Header from '../Components/Header';
import Headings from '../Components/Headings';
import GridGallery from '../Components/GridGallery';
import UltraAndLaserBio from '../Components/UltraAndLaserBio';
import ProfilePics from '../ProfilePics';

function Ultrasound () {
    return(
        <div>
            <Header />
            <Headings header='3D & 4D Ultrasounds' />
            <UltraAndLaserBio 
                mainPic={ProfilePics.SuiterUltrasound} 
                laserAndUltraTextP1="Dr. Suiter is accredited by the American Institute of Ultrasound
                Medicine and Nuchal Translucency and Quality Review Program. She
                performs her own ultrasound, as this is a part of her job she 
                genuinely loves. Rather than waiting for a report days later, you 
                will be able to receive Dr. Suiter's assessment during the ultrasound."
                laserAndUltraTextP2="Dr. Suiter strives for good pictures and has 3D/4D capabilities. 
                You will view the ultrasound on a large flat screen and can have 
                pictures emailed to you. Dr. Suiter performs ultrasounds for her 
                colleagues at request. If you are not a patient but would desire
                an ultrasound, you can request an order for an ultrasound from 
                your provider."
            />
            <GridGallery />
        </div>
    )
}

export default Ultrasound;