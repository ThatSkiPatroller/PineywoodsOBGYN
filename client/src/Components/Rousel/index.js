import React from "react";
import ProfilePics from "../../ProfilePics";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import FadeInLogo from "../FadeInLogo";
import './style.css'

function Rousel () {
  return (
      <div>
        <div className='laviathan'>
        <FadeInLogo />
        </div>
        <div className='hercules'>
        <Carousel 
          width='100%'
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          dynamicHeight={true}
          stopOnHover={false}
        >
          <div>
            <img src={ProfilePics.Vicki} />
          </div>
          <div>
            <img src={ProfilePics.JanaBrendaKelli} />
          </div>
          <div>
            <img src={ProfilePics.Crystal} />
          </div>
        </Carousel>
        </div>
      </div>
  )
}

export default Rousel;