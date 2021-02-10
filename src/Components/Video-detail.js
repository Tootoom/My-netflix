import React from 'react';

const VideoDetails = (props) => {
    const title = props.title;
    const overview = props.overview;
    const date = props.date;
    return (
        <div className="video-details">
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    )
}

export default VideoDetails;