import React from 'react';
import Header from '../Components/Header';
import Headings from '../Components/Headings';
import GridGallery from '../Components/GridGallery';

function Ultrasound () {
    return(
        <div>
            <Header />
            <Headings header='3D & 4D Ultrasounds' />
            <GridGallery />
        </div>
    )
}

export default Ultrasound;