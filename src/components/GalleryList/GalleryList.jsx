//  import galleryItems from "../../../server/modules/gallery.data";  //  server/modules/gallery.data.js
  import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({ galleryItems, fetchGallery, setLike }) {


    //  run through the galleryItem and map them to the DOM.
    //  Let's just get the posters up first and then add Switches.
    console.log(galleryItems);

    return (
        <>
            {galleryItems.map((galleryItems) => (
                <div key={galleryItems.id} >
                    <GalleryItem 
                    galleryItems={galleryItems} 
                    fetchGallery={fetchGallery}
                        setLike={setLike}
                    />
                </div>
            ))}
        </>
    ) /* end return*/
} /* end gellery*/

export default GalleryList;