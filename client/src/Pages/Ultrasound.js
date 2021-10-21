import React from 'react';
import Header from '../Components/Header';
import Headings from '../Components/Headings';
import UltrasoundBio from '../Components/UltrasoundBio';

function Ultrasound () {
    return(
        <div>
            <Header />
            <Headings header='3D & 4D Ultrasounds' />
            <UltrasoundBio />
        </div>
    )
}

export default Ultrasound;