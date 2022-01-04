import React from 'react';
import { Button } from '@material-ui/core';
import './style.css';

function UltraBio (props) {
    return(
    <div>
        <div className='row'>
            <div className='col-md-6'>
                <img src={props.mainPic} className='suiterultrasoundpic'/>
            </div>
            <div className='col-md-6 ultraParentDiv'>
                
                <div className='ultraDiv mx-auto'>
                <div className='ultraText'>
                    <p>
                        {props.laserAndUltraTextP1}
                    </p>
                    <p>
                        {props.laserAndUltraTextP2}
                    </p>
                
                </div>   </div>
                <Button href='tel:+19366997575' variant='contained' className='ultraBtn' color='success' size='large'>
                    Click to call us at 936-699-7575 for a consultation appointment! 
                </Button>
            </div>
        </div>
    </div>
    )
}

export default UltraBio;