import './App.css';
import Header from './Components/Header.tsx';
import MainBody from './Components/MainBody.tsx';
import Gallery from './Components/Gallery.tsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainBody/>
      <Gallery/>
    </div>
  );
}

export default App;
