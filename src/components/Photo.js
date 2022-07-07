// import dependencies
import React from 'react';

// Creates Single Picture componenet that receives props from Photo Container
const Photo = props => {
    const url = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;

    return(
      
       <li>
        <img src={url} alt=''></img>
    </li>
    
    );
}

export default Photo;