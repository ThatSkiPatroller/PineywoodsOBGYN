import React from 'react';
import Header from '../Components/Header';
import Gal from '../Components/Gal';
import Headings from '../Components/Headings'

function Gallery () {
    return (
        <div>
            <Header />
            <Headings header='Gallery' />
            <Gal />
        </div>
    )
}

export default Gallery;