import React from 'react';
import Header from '../Components/Header';
import LaserBio from '../Components/LaserBio';
import Headings from '../Components/Headings'

function Laser () {
    return(
    <div>
        <Header />
        <Headings header='Laser Treatment' />
        <LaserBio />
    </div>
    )
}

export default Laser;