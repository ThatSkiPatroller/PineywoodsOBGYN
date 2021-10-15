import React from 'react';
import Jana from '../../ProfilePics/Jana.jpg'
import './style.css';

function LeftProfile () {
    return(
//         <div>
//             <div className='spongebob'>
//                 <div className='patrick'>
//                     <p><img src={Jana} border='1px'/></p>
//                     <p>Sit tempor velit nisi aliquip aliqua ea veniam reprehenderit consectetur nostrud dolor de</p>
//                 </div>
//                 <div className='bio'>
//                     <h1><b>Jana Brazil, R.N.</b></h1>
//                     <p>Sit tempor velit nisi aliquip aliqua ea veniam reprehenderit consectetur nostrud dolor deserunt.Fugiat excepteur labore ipsum do aliqua esse reprehenderit eu consequat commodo et proident enim adipisicing.Proident nostrud nisi non labore deserunt eu consequat cillum eiusmod et pariatur.Est reprehenderit cupidatat aliquip incididunt proident occaecat.Proident magna enim laboris veniam proident enim eu exercitation minim irure non minim.</p>
//                 </div>
//             </div>
//             <div>
//     <p className='bob'><img src={Jana} height="200px" width="200px" border="1px"/></p>
//     <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
// </div>
// <div className='jeff'>
//     <p className='bob'><img src={Jana} height="200" width="200" border="1px"/></p>
//     <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
// </div>
//         </div>
        <div>
            <p className='bob'><img src={Jana} height='400px'/></p>
            <div className='chad'>
                <h1 ><b>Jana Brazil, R.N.</b></h1>
            </div>
            <div className='jeff'>
                <p >
                    This is where Jana's bio will go. This line is to see if page ia responsive
                </p>
            </div>
        </div>
    )
}

export default LeftProfile