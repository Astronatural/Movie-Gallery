
function GalleryItem({ galleryItems }) {
    console.log(galleryItems);

    // Install the photo/text swap and the "likes" functionality.

    return (
        <>
        <img src={galleryItems.path} width="15%" height="20%"></img>
            <p>{galleryItems.likes} likes</p>
        </>
    )
}


export default GalleryItem;