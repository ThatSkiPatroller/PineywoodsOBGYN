import React from 'react';
import Slider from 'react-slick';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import FiveStars from '../FiveStars';
import './style.css'

const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
}


function Slide () {
     return(
        <div>
            <Slider {...settings}>
                <div id='trace' align='center'>
                    <h3>"Dr. Suiter and her staff are wonderful! Our family is so thankful for them ❤️"</h3>
                    <FiveStars />
                    <p>Catherine B. <b>Facebook</b></p>
                </div>
                <div id='trace' align='center'>
                    <h3>"Dr. Suiter is hands down the best doctor with the most wonderful staff! 💙 Could not have chosen a better doctor to help me bring my baby boy into the world! 🥰"</h3>
                    <FiveStars />
                    <p>Ana H. <b>Facebook</b></p>
                </div>
                <div id='trace' align='center'>
                    <h3>"Dr. Suiter is the absolute BEST!! She delivered both of my babies and my husband and I just love her and ALL of the staff at the office! ❤️"</h3>
                    <FiveStars />
                    <p>Jana L. <b>Facebook</b></p>
                </div>
            </Slider>
        </div>
     )
}

export default Slide