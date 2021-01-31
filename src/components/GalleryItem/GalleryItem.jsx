import React, {useState} from 'react';

function GalleryItem({ galleryItems, setLike }) {

//  Set up a useState to check clicks on the posters.
//  switch between posters and descriptions.
//  can I just shove the poster in a button?
    const [clickState, setClickState]  = useState(true);  // hook for pic swap.

    const togglePic = () => {
        console.log('in togglePic');
        setClickState(!clickState);
    }
    
    
    // build tags for elements
    const picSwap = () => {
     if (clickState) {
         return  <img src={galleryItems.path} width="15%" height="20%"></img>
     }
     else {
           return <p>{galleryItems.description}</p>
    }
    }
   


    return (
        <>
            <div onClick={() => togglePic()}>{picSwap()}</div>
            {/* <img src={galleryItems.path} width="15%" height="20%"></img>   leave in for test*/}
            <p>{galleryItems.likes} People love this film too!</p>
            <button onClick={()=>setLike(galleryItems.id)}>My Fav too!</button>
        </>
    )
}


export default GalleryItem;