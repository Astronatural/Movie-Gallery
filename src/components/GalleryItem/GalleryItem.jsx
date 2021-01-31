

function GalleryItem({ galleryItems, setLike }) {


    return (
        <>
        <img src={galleryItems.path} width="15%" height="20%"></img>
            <p>{galleryItems.likes} People love this film too!</p>
            <button onClick={()=>setLike(galleryItems.id)}>My Fav too!</button>
        </>
    )
}


export default GalleryItem;