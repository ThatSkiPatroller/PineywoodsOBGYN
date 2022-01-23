import React from 'react';
import { Card, Button } from '@material-ui/core';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const settings2 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
}

function About () {
    return (
        <div>
        <Slider {...settings2}>
            <div>
                <Card className='aboutCard mx-auto'>
                    <p>
                        The Pineywoods OBGYN staff is a compassionate, caring and kind group whom will try hard to accomodate your needs. 
                        They pride themselves in making sure all messages are answered promptly and appointments are convenient 
                    </p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Card> 
            </div>
            <div>
                <Card className='aboutCard mx-auto'>
                        <p>
                            Pineywoods OBGYN has an in-house phlebotomist with Bioreference Lab and your labs will be available in the Healow app or Bioreference online: 
                        </p>
                        <Button className='cardLinks' target='_blank' variant='contained' color='primary'  href='https://www.bioreference.com/patient-portal'>
                            Bioreference
                        </Button> 
                        <Button className='cardLinks' target='_blank' variant='contained' color='secondary'  href='https://healow.com/app.html'>
                            Healow
                        </Button> 
                </Card> 
            </div>
            <div>
                <Card className='aboutCard mx-auto'>
                    <div>
                        <p>
                            After hours, the office has an answering service to forward your call to the on call physician.
                            Dr. Suiter is available for most hospital calls so when you are in the hospital they will call her directly.
                        </p>
                    </div>
                </Card> 
            </div>
        </Slider>
        
        </div>
    )
}

export default About;