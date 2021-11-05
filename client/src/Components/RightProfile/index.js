import React from 'react';
import './style.css';

function RightProfile (props) {
    return(
        <div>
            <div className='col-12'>
                 <div className='row'>
                    <div className='col'>
                        <p className='bryan'><img src={props.picture} height='400px'/></p>
                            <div className='row'>
                                <div className='col'>
                                    <div className='luis'>
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

export default RightProfile