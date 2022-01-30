import React from 'react';
import { Button, Grid } from '@material-ui/core';
import './style.css';

function UltraBio (props) {
    return(
        
        <div className='bioWithButton'>
            <Grid container justifyContent='center' alignItems='center'>
            <Grid item md={6} spacing={1}>
                <img src={props.mainPic} className='suiterultrasoundpic'/>
            </Grid>
            <Grid item md={6} spacing={1} className='ultraParentDiv'>
                
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
                    <b>Click to call us at 936-699-7575 for a consultation appointment! </b>
                </Button>
            </Grid>
            </Grid>
        </div>
        
    )
}

export default UltraBio;