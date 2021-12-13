import React from 'react';
import './style.css';

function Headings (props) {
    return(
        <div className='headingsText'>
            <h1><b>
                {props.header}
            </b></h1>
        </div>
    )
}

export default Headings