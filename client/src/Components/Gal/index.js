import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import dog1 from '../../Images/dog1.jpg';
import dog2 from '../../Images/dog2.jpg';
import './style.css';

const images = [
    {
        original: dog1,
        description: 'The best of the best'
    },
    {
        original: dog2,
        description: 'Lorem ipsum Lorem ipsum'
    }
]

class Gal extends Component {
    render(){
    return (
        <div>
            <ImageGallery items={images}/>
        </div>
    )
    }
}

// const images = [
//     {
//         original: dog1,
//         description: 'The best of the best'
//     },
//     {
//         original: dog2,
//         description: 'Lorem ipsum Lorem ipsum'
//     }
// ]

// function Gal () {
//     return (
//         <div>
//             <ImageGallery items={images}/>
//         </div>
//     )
// }

export default Gal;