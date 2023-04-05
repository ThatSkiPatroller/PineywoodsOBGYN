import React from 'react';
import Slider from 'react-slick';
import FiveStars from '../FiveStars';
import './style.css'

const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false,
}

function Slide () {
     return(
        <div>
            <img src="https://d1wedsacc4lfnu.cloudfront.net/babyCloudFinal.png" className='sliderParent' />
            <div className='sliderContainer'>
                <Slider {...settings}>
                    <div className='slideText' align='center'>
                        <h3>"Dr. Suiter and her staff are wonderful! Our family is so thankful for them ❤️"</h3>
                        <FiveStars />
                        <p>Catherine B. <b>Facebook</b></p>
                    </div>
                    <div className='slideText' align='center'>
                        <h3>"The best! Both these sweet ladies took great care of both my babies during my pregnancies!"</h3>
                        <FiveStars />
                        <p>Stacey P. <b>Facebook</b></p>
                    </div>
                    <div className='slideText' align='center'>
                        <h3>
                            "Very compassionate staff. Highly recommend Dr Suiter and Jana. They are the best! Love Love Love!"
                        </h3>
                        <FiveStars />
                        <p>Chastity B. <b>Facebook</b></p>
                    </div>
                </Slider>
            </div>
        </div>
     )
}

export default Slide