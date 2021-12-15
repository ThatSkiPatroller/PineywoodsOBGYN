import React from "react";
import ProfilePics from "../../ProfilePics";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import FadeInLogo from "../FadeInLogo";
import './style.css'
 
function Rousel () {

  return (
      <div>
        {/* <div className='laviathan'>
        <FadeInLogo />
        </div> */}
        <div className='hercules'>
        <Carousel 
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          dynamicHeight={false}
          stopOnHover={false}
          animationHandler={'fade'}
          swipeable={false}
        >
          {/* <div>
            <img src={ProfilePics.SuiterProfile2} className='newYork' />
          </div> */}
          <div>
            <img src={ProfilePics.SuiterSign} className='carou' />
          </div>
          <div>
            <img src={ProfilePics.Vicki} className='carou'/>
          </div>
          <div>
            <img src={ProfilePics.JanaSign} className='carou' />
          </div>
          <div>
            <img src={ProfilePics.JanaBrendaKelli} className='carou'/>
          </div>
          <div>
            <img src={ProfilePics.SandraSign} className='carou' />
          </div>
          <div>
            <img src={ProfilePics.Crystal} className='carou' />
          </div>
        </Carousel>
        </div>
      </div>
  )
}

export default Rousel;