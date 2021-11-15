import React from 'react';
import '../../ProfilePics';
import ProfilePics from '../../ProfilePics';
import './style.css';

function About () {
    return (
        <div>
            <div className='bg'>
                <img src={ProfilePics.OfficeStaff} className='staff' />
            </div>
        </div>
    )
}

export default About;