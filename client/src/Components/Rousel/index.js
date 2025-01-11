import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css'
 
function Rousel () {
  return (
      <div>
        <div className='carouselSides'>
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
          {/* make sure images are sized to 3:2 aspect ratio */}
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/SuiterSign.webp' className='carou' alt="Dr. Suiter standing in front of Pineywoods OBGYN sign"/>
          </div>
          <div>
          <img src='https://d1wedsacc4lfnu.cloudfront.net/newImg2.jpg' className='carou' alt="Patient checking out at front desk of Pineywoods OBGYN"/>
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/JanaSign.webp' className='carou' alt="Jana Brazil standing in front of Pineywoods OBGYN sign"/>
          </div>
          <div>
          <img src='https://d1wedsacc4lfnu.cloudfront.net/SuiterMeasuring.webp' className='carou' alt="Dr. Suiter measuring a patients pregnant stomach"/>
            {/* <img src='https://d1wedsacc4lfnu.cloudfront.net/JanaBrendaKelli6.webp' className='carou'/> */}
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/SandraSign.webp' className='carou' alt="Office manager in front of Pineywoods OBGYN sign"/>
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/SuiterPaula.webp' className='carou' alt="Dr. Suiter and staff talking with patient in room"/>
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/JanaSuiterDiplomas.webp' className='carou' alt="Dr. Suiter and Jana Brazil standing in front of a wall of awards and honors"/>
          </div>
        </Carousel>
        </div>
        </div>
      </div>
  )
}

export default Rousel;