import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from '../Gallery/Gallery.jsx';  //src/components/Gallery


function App() {
//  Hooks go here.
  const [galleryItems, setGalleryItems] = useState();


//  GET goes here
  const fetchGallery = () => {
    axios.get('/gallery').then((response) => {
      setGalleryItems(response.data);
    }).catch((error) => {
      console.log(error)
    })
    console.log(galleryItems);

  }


  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Favorite Movies of Mine; an Autobiogrphical-Cinematic Retrospective</h1>
        </header>
        <p>Gallery goes here</p>
      <Gallery galleryItems={galleryItems} fetchGallery={fetchGallery}/>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
