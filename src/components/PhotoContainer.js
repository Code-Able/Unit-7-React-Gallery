// Import dependencies and photo componenet
import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';






// Creates PhotoContainer componenet that receives info via props from app.js
const PhotoContainer = (props) => {
    let results = props.data;
    let gifs;
    
    // let location = useLocation();
    // if (location.pathname !== '/cats' || '/dogs' || '/birds'){
    //     props.performSearch();
    // }   



   // Maps out pictures in search results
   if (results.length > 0){
    gifs = results.map(gif => <Photo id={gif.id} server={gif.server} secret={gif.secret} key={gif.id}/>
   );
   } else {
       gifs = <NotFound />
   };




   
// Renders a div with the search title and pictures
    return(
    <div className='photo-container'>
        <h2>{props.query}</h2>
        <ul>{gifs}</ul>
    </div>
    );
}

export default PhotoContainer;