import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import logo from '../../Images/transp-small-logo.png'

const style = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
}

function FadeInLogo () {
    return(
        <ImageFadeIn width={500} height={500} opacityTransition={4} style={style} src={logo} />
    )
}

export default FadeInLogo