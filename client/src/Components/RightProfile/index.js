import React from 'react';
import { Card } from '@material-ui/core'
import './style.css';

function RightProfile (props) {
    return(
        <div className='roomba'>
            <div className='row'>
                <div className='col-8'>
                    <Card className='rooftop'>
                        <h1><b>{props.name}</b></h1>
                       
                        <h1 className='ajay'>
                            {props.bio}
                        </h1>
                    </Card>
                </div>
                <div className='col-4'>
                    <p className='icecream'><img src={props.picture} height='400px'/></p>
                </div>
            </div>
        </div>
    )
}

export default RightProfile