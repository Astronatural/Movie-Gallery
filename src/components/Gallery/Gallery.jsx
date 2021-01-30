//  import galleryItems from "../../../server/modules/gallery.data";  //  server/modules/gallery.data.js
//  import Switches from "../Swtiches/Switches";

function Gallery({ galleryItems }) {
    //  run through the galleryItem and map them to the DOM.
    //  Let's just get the posters up first and then add Switches.

    return (
        <>
        {galleryItems.map((poster) => (
                <div key={poster.id} >
                    <img src={poster.path}> </img>
                    <p>{poster.likes}</p>
                    </div> 
        ))}
        </>
        ) /* end return*/
        } /* end gellery*/

export default Gallery;