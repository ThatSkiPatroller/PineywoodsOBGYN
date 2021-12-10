import React from 'react';
import Gallery from 'react-grid-gallery';
import UltrasoundPics from '../../UltrasoundPics';
import './style.css';

function GridGallery () {
    const IMAGES = 
    [{
        thumbnail: UltrasoundPics.One,
        src: UltrasoundPics.One,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Two,
        src: UltrasoundPics.Two,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Three,
        src: UltrasoundPics.Three,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Four,
        src: UltrasoundPics.Four,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    }, 
    {
        thumbnail: UltrasoundPics.Five,
        src: UltrasoundPics.Five,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Six,
        src: UltrasoundPics.Six,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Seven,
        src: UltrasoundPics.Seven,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Eight,
        src: UltrasoundPics.Eight,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Nine,
        src: UltrasoundPics.Nine,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Ten,
        src: UltrasoundPics.Ten,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    },
    {
        thumbnail: UltrasoundPics.Eleven,
        src: UltrasoundPics.Eleven,
        thumbnailWidth: 240,
        thumbnailHeight: 180,
    }]

    return(
        <div className='container-div-grid-gallery'>
            <Gallery rowHeight='150' images={IMAGES} className='grid-gal'/>
        </div>
    );
}

export default GridGallery;

