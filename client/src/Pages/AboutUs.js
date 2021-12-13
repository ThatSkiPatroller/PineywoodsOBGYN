import React from 'react';
import Header from '../Components/Header';
import Headings from '../Components/Headings';
import LeftProfile from '../Components/LeftProfile';
import RightProfile from '../Components/RightProfile';
import ProfilePics from '../ProfilePics';
import AllStaff from '../Components/AllStaff';

function AboutUs () {
    return (
        <div>
            <Header />
            <Headings header='Staff Members' />
            <AllStaff />
            <LeftProfile 
                picture={ProfilePics.SuiterProfile} 
                name='Dr. Cheryl Suiter, OBGYN' 
                bio="Dr. Suiter grew up in Diboll, Texas and married Wes Suiter in 1982. During her undergraduate years she worked as a nurse's aide and ward clerk. 
                She went on to work her way through medical school in labor and delivery as a nurse. 
                She graduated with honors from University of Texas Health Science Center in San Antonio and was accepted to residency and fellowship. 
                She received an award for research and has been published several times. 
                She left fellowship/Assistant Clinical Professor to come back to East Texas and has been in practice since 1998 in Lufkin, Texas. 
                She loves to teach and loves ultrasound. She has authored an article 'Be a Warrior, Not Just a Survivor' after a journey with breast cancer.
                Dr. Suiter loves both obstetrics and gynecology. She provides axcellent continuity of care and does her own ultrasounds."
            />
            <br />
            <RightProfile 
                picture={ProfilePics.Jana} 
                name='Jana Brazil, R.N.'
                bio='Jana grew up in Lufkin and is a 1993 graduate of Lufkin High School. She attended Stephen F. Austin State University, where she graduated with a Bachelor of Science in Nursing degree. As a registered nurse, Jana spent a year working in ICU then went on to work 12 years in Labor & Delivery. Given the opportunity to join Dr. Suiter’s practice, Jana returned to college at the University of South Alabama, where she graduated summa cum laude with a Master of Science in Nursing degree and certification as a Women’s Health Nurse Practitioner in 2010.

                Jana and her husband, Travis, married in 1994, and they have four children: Haley (Brazil) and Rance Truss and Taylor (Brazil) and Jimmy Sims. Outside of work, Jana is an active member of her church. She volunteers with the Angelina County Fair and serves as a member of the SFASU DeWitt School of Nursing Advisory Board.
                
                Jana provides excellent care to women in both obstetrics and gynecology. She truly enjoys her job and feels blessed to have the opportunity to serve patients in the community in which she was raised and loves.'
            />
        </div>
    )
}

export default AboutUs;