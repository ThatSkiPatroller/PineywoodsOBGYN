import React from 'react';
import './style.css';

function Headings (props) {
    return(
        <div className='tod'>
            <h1><b>
                {props.header}
            </b></h1>
        </div>
    )
}

export default Headings