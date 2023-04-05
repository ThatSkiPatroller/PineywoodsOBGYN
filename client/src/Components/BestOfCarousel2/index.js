// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class BestOfCarousel2 extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//       pauseOnHover: false,
//       rtl: true,
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
//                 slidesToShow: 4,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 3,
//             }
//         }
//       ]
//     };
//     return (
//         <div>
//             <Slider {...settings}>
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