import React from 'react';
import Header from '../Components/Header';
import Gal from '../Components/Gal';
import Headings from '../Components/Headings';
import Footer from '../Components/Footer';

function Gallery () {
    return (
        <div>
            <Header />
            <Headings header='Gallery' />
            <Gal />
            <Footer />
        </div>
    )
}

export default Gallery;