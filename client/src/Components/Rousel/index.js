import React from "react";
import { Slide } from 'react-slideshow-image';
import BabyPics from "../../BabyPics";
import 'react-slideshow-image/dist/styles.css'
import './style.css'
import FadeInLogo from "../FadeInLogo";

const CustomArrowExample = () => {
  const slideImages = [
    BabyPics.a,
    BabyPics.b,
    BabyPics.c
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div></div>,
    nextArrow: <div></div>
  };
{/* <span><FadeInLogo/></span> */}
  return (
    <div>
      
      <br />
      <div>
        <Slide {...properties}>
            
          {slideImages.map((each, index) => (
          
            <div key={index} className="each-slide">
              <div style={{ backgroundImage: `url(${each})` }}>
                
              </div>
            </div>
          ))}
        </Slide>
        <div></div>
      </div>
    </div>
  );
};

export default CustomArrowExample;