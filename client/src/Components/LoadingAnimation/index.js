// import React, { useRef } from 'react';
// import './style.css';

// function LoadingAnimation() {
//   const babyRef = useRef(null);

//   function animateBaby() {
//     let startTime = null;

//     function moveBaby(timestamp) {
//       if (!startTime) startTime = timestamp;

//       const progress = timestamp - startTime;
//       const percentage = progress / 5000; // 5000ms for the animation duration
//       babyRef.current.style.left = `${-10 + percentage * 120}%`;

//       if (percentage < 1) {
//         requestAnimationFrame(moveBaby);
//       } else {
//         babyRef.current.style.left = '-10%';
//         startTime = null;
//         requestAnimationFrame(moveBaby);
//       }
//     }

//     requestAnimationFrame(moveBaby);
//   }

//   animateBaby();

//   return (
   
//       <div class="baby-container">
//         <div class="baby">
//             <div class="head">
//                 <div class="curl"></div>
//             </div>
//             <div class="body">
//                 <div class="diaper"></div>
//                 <div class="left-arm limb"></div>
//                 <div class="right-arm limb"></div>
//                 <div class="left-leg limb"></div>
//                 <div class="right-leg limb"></div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default LoadingAnimation;