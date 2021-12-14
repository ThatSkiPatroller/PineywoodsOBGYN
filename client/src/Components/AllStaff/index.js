import React from 'react';
import './style.css';
import ProfilePics from '../../ProfilePics'

function AllStaff () {
    return (
        <div>
            <img src={ProfilePics.OfficeStaff} className='staffPic'/>
            <div className='staffTextDiv'>
                <h1 className='staffText'>Crystal, Sandra, Jana, Paula, Kelli, Dr. Suiter, Cynthia, Jessica and Vicki</h1>
            </div>
        </div>
    )
}

export default AllStaff;