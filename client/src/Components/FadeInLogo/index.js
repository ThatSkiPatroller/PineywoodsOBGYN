import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import logo from '../../Images/transp-small-logo.png';
import './style.css';

function FadeInLogo () {
    return(
        <ImageFadeIn width={250} height={250} opacityTransition={6} className='pureLeaf' src={logo} srcset='logo 1.5x, logo 2x, logo 3x, logo 4x, logo 100x' sizes='70vmin' loadAsBackgroundImage={false}/>
    )
}

export default FadeInLogo