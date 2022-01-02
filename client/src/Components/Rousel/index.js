import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css'
 
function Rousel () {

  return (
      <div>
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
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/SuiterSign.webp' className='carou' />
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/Vicki.webp' className='carou'/>
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/JanaSign.webp' className='carou' />
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/JanaBrendaKelli.webp' className='carou'/>
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/SandraSign.webp' className='carou' />
          </div>
          <div>
            <img src='https://d1wedsacc4lfnu.cloudfront.net/Crystal.webp' className='carou' />
          </div>
        </Carousel>
        </div>
      </div>
  )
}

export default Rousel;