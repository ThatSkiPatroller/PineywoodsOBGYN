import React from "react";
import './style.css'

function BestOf () {
    return (
        <div>
            <div class="container">
                <div class="awards-container">
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2006.png" alt="Best of Lufkin 2006 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2007.png" alt="Best of Lufkin 2007 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2008.png" alt="Best of Lufkin 2008 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2009.png" alt="Best of Lufkin 2009 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2010.png" alt="Best of Lufkin 2010 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2011.png" alt="Best of Lufkin 2011 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2012.png" alt="Best of Lufkin 2012 Award"/>
                </div>
                <div class="awards-container">
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2013.png" alt="Best of Lufkin 2013 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2014.png" alt="Best of Lufkin 2014 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2015.png" alt="Best of Lufkin 2015 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2016.png" alt="Best of Lufkin 2016 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2017.png" alt="Best of Lufkin 2017 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2018.png" alt="Best of Lufkin 2018 Award"/>
                    <img class="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2021.png" alt="Best of Lufkin 2021 Award"/>
                </div>
            </div>
        </div>
    )
}

export default BestOf;

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class AutoPlay extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 10,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//       pauseOnHover: false,
//       responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 10,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 3,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//       ]
//     };
//     return (
//         <div>
//             <Slider {...settings}>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2006.png" width="100px"/>
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2007.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2008.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2009.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2010.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2011.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2012.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2013.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2014.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2015.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2016.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2017.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2018.png" width="100px" />
//                 </div>
//                 <div>
//                     <img className="award" src="https://d1wedsacc4lfnu.cloudfront.net/BestOfLufkinAward2021.png" width="100px" />
//                 </div>
//             </Slider>
//         </div>
//     );
//   }
// }

 