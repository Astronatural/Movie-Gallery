import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';  //src/components/Gallery
import { ChakraProvider } from "@chakra-ui/react"



function App({ Component }) {
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
      url: `/gallery/like/${itemId}`,   //    axios.put('/like/', { id: itemId }  `/like/${itemId }`
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
        <h1 className="App-title">Favorite Movies of Mine</h1>
        <h2>An Autobiogrphical-Cinematic Retrospective</h2>
      </header>
      <ChakraProvider>
        <Component />
      </ChakraProvider>
      <GalleryList
        galleryItems={galleryItems}
        fetchGallery={fetchGallery}
        setLike={setLike}
      />
    </div>
  );
}

export default App;