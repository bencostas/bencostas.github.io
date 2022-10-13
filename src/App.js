import './App.css';
import Header from './Components/Header.tsx';
import MainBody from './Components/MainBody.tsx';
import Gallery from './Components/Gallery.tsx';
import React from 'react';
import Work from './Components/Jobs.tsx'

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
