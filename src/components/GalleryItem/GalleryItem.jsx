import React, {useState} from 'react';

function GalleryItem({ galleryItems, setLike }) {

//  Set up a useState to check clicks on the posters.
//  switch between posters and descriptions.
//  can I just shove the poster in a button?
    const [clickState, setClickState]  = useState(true);

    return (
        <>
        <img src={galleryItems.path} width="15%" height="20%"></img>
            <p>{galleryItems.likes} People love this film too!</p>
            <button onClick={()=>setLike(galleryItems.id)}>My Fav too!</button>
        </>
    )
}


export default GalleryItem;