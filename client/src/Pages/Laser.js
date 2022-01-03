import React from 'react';
import Header from '../Components/Header';
import LaserBio from '../Components/LaserBio';
import Headings from '../Components/Headings'
import UltraAndLaserBio from '../Components/UltraAndLaserBio';
import ProfilePics from '../ProfilePics';
import Footer from '../Components/Footer';
import YoutubeVid from '../Components/YoutubeVid';

function Laser () {
    return(
    <div>
        <Header />
        <Headings header='Laser Treatments' />
        <UltraAndLaserBio 
            mainPic={ProfilePics.Laser}
            laserAndUltraTextP1="Over the course of a lifetime, every woman feels the effects of childbirth and aging. 
            With the loss of vaginal tone, lubrication, and elasticity, women can often benefit from CO2RE
            Intima laser treatments. With the loss of elasticity and tone, women often suffer from stress urinary 
            Incontinence (loss of urine with movement, cough or sneezing)."
            laserAndUltraTextP2="We offer a non surgical and non painful 
            treatment with CO2RE Intima Laser Treatment. CO2RE treatment is a safe and quick (10-15 minutes) non surgical
            treatment without incisions. It works by delivering controlled (fractional) CO2 energy which stimulates the 
            formation of collagen thus remodeling the tissue. Patient will recieve a treatment every 3 - 4 weeks for 3 
            treatments and then a single treatment a year after. "
        />
        <YoutubeVid embedId="_pC3E7W7ucM" />
        <Footer />
        
    </div>
    )
}

export default Laser;