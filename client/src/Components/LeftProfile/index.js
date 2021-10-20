import React from 'react';
import { propTypes } from 'react-image-fade-in';
import Jana from '../../ProfilePics/Jana.jpg'
import './style.css';

function LeftProfile (props) {
    return(
        <div>
            <p className='bob'><img src={props.picture} height='400px'/></p>
            <div className='chad'>
                <h1 ><b>Jana Brazil, R.N.</b></h1>
                <br />
                <p >
                    This is where Jana's bio will go. This line is to see if page ia responsive
                </p>
                <p>
                    Also don't forget to put fancy text box right here later
                </p>
            </div>
        </div>
    )
}

export default LeftProfile