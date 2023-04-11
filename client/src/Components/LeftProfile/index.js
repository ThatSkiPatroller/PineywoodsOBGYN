import React from 'react';
import Slider from 'react-slick';
import { Card } from '@material-ui/core';
import './style.css';

function LeftProfile (props) {
    return(
        <div className='robot'>
            <div className='row'>
                <div className='col-sm-4'>
                    <img src={props.picture} className='profPic' alt='Dr. Cheryl Suiter, OBGYN'
                    />
                </div>
                <div className='col-sm-8'>
                    <Card className='bioCard'>
                        <h1 className='bioName'><b>{props.name}</b></h1>
                        <h1 className='bioBio'>
                            {props.bio1}
                        </h1>
                        <h1 className='bioBio'>
                            {props.bio2}
                        </h1>
                        <h1 className='bioBio'>
                            {props.bio3}
                        </h1>
                    </Card>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default LeftProfile