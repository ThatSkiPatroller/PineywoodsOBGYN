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
                bio='Dr. Suiter grew up in Diboll, Texas. She married Wes Suiter in 1982. She graduated from Stephen F.Austin State University with a Bachelor’s degree in Nursing. During her undergraduate years she worked at Woodland Heights as a nurse’s aide and ward clerk. Once she graduated, she went on to work her way through medical school in labor and delivery. She knew from a very young age she wanted to be a doctor, however, knew she would need another career to get her there.
                She graduated with honors ( in the top 10%)from University of Texas Health Science Center in San Antonio and was accepted to residency and fellowship there. She received and award residency for research and has be published. She left fellowship/Assistant Clinical Professor in San Antonio to come back home to be closer to her family.
                She has been in practice since 1998 in Lufkin. She has mentored nurses, nurse practitioners, medical students, and ultrasound techs over the years. She loves to teach and loves ultrasound. She has recently authored an article “Be a Warrior, Not Just a Survivor “ after a journey with breast cancer. She has been voted Best of Lufkin for many years and was Healthcare Provider of the year for Angelina County in 2016.
                Dr. Suiter practices the full scope of Obstetrics and Gynecology, including doing her own ultrasounds. She has been married to her husband Wes, since 1982. They have a son Trace whom has recently graduated from University of Texas.'
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