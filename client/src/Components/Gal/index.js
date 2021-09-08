import React from 'react';
import ImageGallery from 'react-image-gallery';
import pat from '../../Images/pat.jpg';
import pete from '../../Images/Pictures.png'

const images = [
    {
        original: pat,
        description: 'The best of the best',
    },
    {
        original: pete,
    }
]

function Gal () {
    return (
        <div>
            <ImageGallery items={images}/>
        </div>
    )
};

export default Gal;