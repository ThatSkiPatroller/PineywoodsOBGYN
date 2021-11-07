import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import logo from '../../Images/transp-small-logo.png'

const style = {
    
}

function FadeInLogo () {
    return(
        <ImageFadeIn width={400} height={400} opacityTransition={6} style={style} src={logo} loadAsBackgroundImage={false}/>
    )
}

export default FadeInLogo