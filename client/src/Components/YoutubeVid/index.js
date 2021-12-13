import React from 'react';
import './style.css';

function YoutubeVid (props) {
    return(
        <div className='videoContainer'>
            <iframe
                width='853'
                height='480'
                src={`https://www.youtube.com/embed/${props.embedId}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Laser Treatment'
                className='video'
            />
        </div>
    )
}

export default YoutubeVid;