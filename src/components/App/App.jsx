import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';  //src/components/Gallery


function App() {
  //  Hooks go here.
  const [galleryItems, setGalleryItems] = useState([]);


  //  GET goes here
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response);
      console.log(response.data);
      setGalleryItems(response.data);
      console.log(response.data);
      console.log(galleryItems);
    }).catch((error) => {
      console.log(error)
    })
    console.log(galleryItems);
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
      <p>Gallery goes here</p>
      <GalleryList
        galleryItems={galleryItems}
        fetchGallery={fetchGallery}
      //  probably add props for switch and like.
      />


      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
