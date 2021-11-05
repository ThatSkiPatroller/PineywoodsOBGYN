import React from 'react';
import { propTypes } from 'react-image-fade-in';
import Jana from '../../ProfilePics/Jana.jpg'
import './style.css';

function LeftProfile (props) {
    return(
         <div>
            <div className='col-12'>
                 <div className='row'>
                    <div className='col'>
                        <p className='bob'><img src={props.picture} height='400px'/></p>
                            <div className='row'>
                                <div className='col'>
                                    <div className='roony'>
                                        <h1 ><b>{props.name}</b></h1>
                                        <br />
                                        <p>
                                        {props.bio}
                                        </p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default LeftProfile