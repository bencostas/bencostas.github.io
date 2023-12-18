import './App.css';
import Header from './Components/Header.js';
import MainBody from './Components/MainBody.js';
import Gallery from './Components/Gallery.js';
import React from 'react';
import Work from './Components/Jobs.js'

function App() {
  return (
    <div className="App">
      <div className=''>
      <Header/>
      <MainBody/>
      <Work/>
      <Gallery/>
      </div>
    </div>
  );
}

export default App;
