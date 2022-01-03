import React, { useState } from 'react';
import { propTypes } from 'react-image-fade-in';
import { Card } from '@material-ui/core';
import './style.css';

function LeftProfile (props) {
    const [click, setClick] = useState(false);
    console.log(click);
    return(
        <div className='robot'>
            <div className='row'>
                <div className='col-sm-4'>
                    <img src={props.picture} className='profPic'
                    // onClick={() => setClick(true)}
                    />
                </div>
                {/* {click ?  */}
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
             {/* :  */}
                <div>
                </div>
                {/* } */}
            </div>
        </div>

    )
}

export default LeftProfile