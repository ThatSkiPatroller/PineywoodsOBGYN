import React from 'react';
import Header from '../Components/Header';
import Headings from '../Components/Headings';
import LeftProfile from '../Components/LeftProfile';
import RightProfile from '../Components/RightProfile';
import ProfilePics from '../ProfilePics';


function AboutUs () {
    return (
        <div>
            <Header />
            <Headings header='Staff Members' />
            <LeftProfile 
                picture={ProfilePics.SuiterProfile} 
                name='Dr. Cheryl Suiter, OBGYN' 
                bio='Dr. Suiter grew up in Diboll, Texas. She married Wes Suiter in 1982. She graduated from Stephen F.Austin State University with a Bachelor’s degree in Nursing. During her undergraduate years she worked at Woodland Heights as a nurse’s aide and ward clerk. Once she graduated, she went on to work her way through medical school in labor and delivery. She knew from a very young age she wanted to be a doctor, however, knew she would need another career to get her there.
                She graduated with honors ( in the top 10%)from University of Texas Health Science Center in San Antonio and was accepted to residency and fellowship there. She received and award residency for research and has be published. She left fellowship/Assistant Clinical Professor in San Antonio to come back home to be closer to her family.
                She has been in practice since 1998 in Lufkin. She has mentored nurses, nurse practitioners, medical students, and ultrasound techs over the years. She loves to teach and loves ultrasound. She has recently authored an article “Be a Warrior, Not Just a Survivor “ after a journey with breast cancer. She has been voted Best of Lufkin for many years and was Healthcare Provider of the year for Angelina County in 2016.
                Dr. Suiter practices the full scope of Obstetrics and Gynecology, including doing her own ultrasounds. She has been married to her husband Wes, since 1982. They have a son Trace whom has recently graduated from University of Texas.'
            />
            <br />
            <RightProfile 
                picture={ProfilePics.Jana} 
                name='Jana Brazil, R.N.'
                bio='Dr. Suiter grew up in Diboll, Texas. She married Wes Suiter in 1982. She graduated from Stephen F.Austin State University with a Bachelor’s degree in Nursing. During her undergraduate years she worked at Woodland Heights as a nurse’s aide and ward clerk. Once she graduated, she went on to work her way through medical school in labor and delivery. She knew from a very young age she wanted to be a doctor, however, knew she would need another career to get her there.
                She graduated with honors ( in the top 10%)from University of Texas Health Science Center in San Antonio and was accepted to residency and fellowship there. She received and award residency for research and has be published. She left fellowship/Assistant Clinical Professor in San Antonio to come back home to be closer to her family.
                She has been in practice since 1998 in Lufkin. She has mentored nurses, nurse practitioners, medical students, and ultrasound techs over the years. She loves to teach and loves ultrasound. She has recently authored an article “Be a Warrior, Not Just a Survivor “ after a journey with breast cancer. She has been voted Best of Lufkin for many years and was Healthcare Provider of the year for Angelina County in 2016.
                Dr. Suiter practices the full scope of Obstetrics and Gynecology, including doing her own ultrasounds. She has been married to her husband Wes, since 1982. They have a son Trace whom has recently graduated from University of Texas.'
            />
        </div>
    )
}

export default AboutUs;