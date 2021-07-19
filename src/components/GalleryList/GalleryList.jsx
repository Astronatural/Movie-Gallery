//  import galleryItems from "../../../server/modules/gallery.data";  //  server/modules/gallery.data.js
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import './gl.css';

function GalleryList({ galleryItems, fetchGallery, setLike }) {


    //  run through the galleryItem and map them to the DOM.
    //  Let's just get the posters up first and then add Switches.
    console.log(galleryItems);

    return (
        <>
            <div className="posterWall">
                {galleryItems.map((galleryItems) => (
                    <div className="posterBox" key={galleryItems.id} >
                        <GalleryItem
                            galleryItems={galleryItems}
                            fetchGallery={fetchGallery}
                            setLike={setLike}
                        />
                    </div>
                ))}
            </div>

        </>
    ) /* end return*/
} /* end gellery*/

export default GalleryList;