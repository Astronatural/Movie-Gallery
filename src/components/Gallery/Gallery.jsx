//  import galleryItems from "../../../server/modules/gallery.data";  //  server/modules/gallery.data.js
//  import Switches from "../Swtiches/Switches";

    function Gallery({ galleryItems}) {
//  run through the galleryItem and map them to the DOM.
//  Let's just get the posters up first and then add Switches.

        let posterGallery = galleryItems.map(() => {
    // return some buttons and functions for EVERY item in the galleryItems
    // return (

    //    <Switches likeClick={likeClick} posterClick={posterClick} />
    // )
});

// JSX on the DOM
return (
    <div>
        {posterGallery}
    </div>
);

}


export default Gallery;