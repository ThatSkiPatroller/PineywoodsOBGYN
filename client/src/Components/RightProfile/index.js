import React from 'react';
import { Card } from '@material-ui/core'
import './style.css';

function RightProfile (props) {
    return(
        <div className='roomba'>
            <div className='row'>
                <div className='col-sm-8 bio2Collumn'>
                    <Card className='bioCard2'>
                        <h1 className='bioName2'><b>{props.name}</b></h1>
                       
                        <h1 className='bioBio2'>
                            {props.bio}
                        </h1>
                    </Card>
                </div>
                <div className='col-sm-4 pic2Collumn'>
                    <img src={props.picture} className='profPic2'/>
                </div>
            </div>
        </div>
    )
}

export default RightProfile