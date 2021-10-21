import React from 'react';
import Header from '../Components/Header';
import Headings from '../Components/Headings';
import LeftProfile from '../Components/LeftProfile';
import ProfilePics from '../ProfilePics';


function AboutUs () {
    return (
        <div>
            <Header />
            <Headings header='Staff Members' />
            <LeftProfile picture={ProfilePics.Suiter}/>
            <LeftProfile picture={ProfilePics.Jana} />
        </div>
    )
}

export default AboutUs;