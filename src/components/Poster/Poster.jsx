import React from 'react';
import './Poster.css';

function Poster (props) {
    return props.url === "N/A" ?
        <div className="post-placeholder"></div> :
        <img className="poster" src={props.url} alt={props.alt} />
}

export default Poster;
