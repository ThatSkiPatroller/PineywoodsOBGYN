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
            <LeftProfile picture={ProfilePics.Suiter} name='Dr. Cheryl Suiter, OBGYN' bio=''/>
            <LeftProfile picture={ProfilePics.Jana} name='Jana Brazil, R.N.'/>
            <LeftProfile picture={ProfilePics.Vicki} />
        </div>
    )
}

export default AboutUs;