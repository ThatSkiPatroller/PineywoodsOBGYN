import React from 'react';
import Gallery from 'react-grid-gallery';
import UltrasoundPics from '../../UltrasoundPics';

function GridGallery () {
    const IMAGES = 
    [{
        thumbnail: UltrasoundPics.One,
        src: UltrasoundPics.One
    },
    {
        thumbnail: UltrasoundPics.Two,
        src: UltrasoundPics.Two
    },
    {
        thumbnail: UltrasoundPics.Three,
        src: UltrasoundPics.Three
    },
    {
        thumbnail: UltrasoundPics.Four,
        src: UltrasoundPics.Four
    }, 
    {
        thumbnail: UltrasoundPics.Five,
        src: UltrasoundPics.Five
    },
    {
        thumbnail: UltrasoundPics.Six,
        src: UltrasoundPics.Six
    },
    {
        thumbnail: UltrasoundPics.Seven,
        src: UltrasoundPics.Seven
    },
    {
        thumbnail: UltrasoundPics.Eight,
        src: UltrasoundPics.Eight
    },
    {
        thumbnail: UltrasoundPics.Nine,
        src: UltrasoundPics.Nine
    },
    {
        thumbnail: UltrasoundPics.Ten,
        src: UltrasoundPics.Ten
    },
    {
        thumbnail: UltrasoundPics.Eleven,
        src: UltrasoundPics.Eleven
    }]

    return(
        <div className='ultrasoundpics'>
            <Gallery images={IMAGES}/>
        </div>
    );
}

export default GridGallery;

