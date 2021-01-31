import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';  //src/components/Gallery
import GalleryItem from '../GalleryItem/GalleryItem.jsx';  //src/components/Gallery


function App() {
  //  Hooks go here.
  const [galleryItems, setGalleryItems] = useState([]);


  //  GET goes here
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      setGalleryItems(response.data);
    }).catch((error) => {
      console.log(error)
    })
  }

  // Install the "likes" functionality.
  const setLike = (itemId) => {
    console.log(`Fav button pressed! target id`, itemId);
    console.log({ id: itemId });

    axios({
      method: 'PUT',
      url: `/like/${itemId}`,   //    axios.put('/like/', { id: itemId }  `/like/${itemId }`
    }).then((response) => {
      fetchGallery();
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }




  //  load gallery on init
  useEffect(() => {
    fetchGallery();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Favorite Movies of Mine; an Autobiogrphical-Cinematic Retrospective</h1>
      </header>
      <GalleryList
        galleryItems={galleryItems}
        fetchGallery={fetchGallery}
        setLike={setLike}
      />
      {/* <GalleryItem
        galleryItems={galleryItems}
        fetchGallery={fetchGallery}
        setLike={setLike}
      /> */}
    </div>
  );
}

export default App;
