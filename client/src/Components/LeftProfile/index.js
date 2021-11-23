import React, { useState } from 'react';
import { propTypes } from 'react-image-fade-in';
import Jana from '../../ProfilePics/Jana.jpg'
import { Card } from '@material-ui/core';
import './style.css';

function LeftProfile (props) {
    const [click, setClick] = useState(false);
    console.log(click);
    return(
        <div className='robot'>
            <div className='row'>
                <div className='col-4'>
                    <p className='felix'><img src={props.picture} onClick={() => setClick(true)}/></p>
                </div>
                {click ? 
                <div className='col-8'>
                    <Card className='roony'>
                        <h1 className='rudolph'><b>{props.name}</b></h1>
                        <h1 className='coshey'>
                            {props.bio}
                        </h1>
                    </Card>
                </div>
             : 
                <div>
                </div>}
            </div>
        </div>

    )
}

export default LeftProfile