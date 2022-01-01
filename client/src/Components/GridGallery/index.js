import React from 'react';
import Gallery from 'react-grid-gallery';
import './style.css';

function GridGallery () {
    const IMAGES = 
    [{
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/one.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/one.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/two.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/two.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/three.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/three.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/four.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/four.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    }, 
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/five.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/five.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/six.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/six.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/seven.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/seven.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/eight.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/eight.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/nine.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/nine.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/ten.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/ten.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    },
    {
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/eleven.webp',
        src: 'https://d1wedsacc4lfnu.cloudfront.net/eleven.webp',
        thumbnailWidth: 240,
        thumbnailHeight: 180
    }]

    return(
        <div className='container-div-grid-gallery'>
            <Gallery rowHeight='180' images={IMAGES}/>
        </div>
    );
}

export default GridGallery;

