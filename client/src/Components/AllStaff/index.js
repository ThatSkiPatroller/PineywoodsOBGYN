import React from 'react';
import './style.css';
import ProfilePics from '../../ProfilePics'

function AllStaff () {
    return (
        <div>
            <img src={ProfilePics.OfficeStaff} className='staffPic'/>
        </div>
    )
}

export default AllStaff;