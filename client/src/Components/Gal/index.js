import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import a from '../../BabyPics/a.jpeg';
import b from '../../BabyPics/b.jpeg';
import c from '../../BabyPics/c.jpeg'; 
import d from '../../BabyPics/d.jpg';
import e from '../../BabyPics/e.jpg';
import './style.css';

const images = [
    {
        original: a,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: b,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: c,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: d,
        description: ''
    },
    {
        original: e,
        description: 'Bryson'
    }
]

function Gal () {
    return (
        <div>
            <ImageGallery items={images}/>
        </div>
    )
}

export default Gal;