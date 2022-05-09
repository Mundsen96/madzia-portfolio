import About from './Components/About';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import images from './Images/Images.js';

import * as React from 'react';

function App() {
  const [showedPictureId, setShowedPictureId] = React.useState(1);
  const [galleryMode, setGalleryMode] = React.useState(false);
  
  const showGallery = (id) => {
    setGalleryMode(prevValue => !prevValue);
    setShowedPictureId(id)
  }
  
  const filterImagesByCurrentId = (Id) => {
    return images.filter((obj) => (obj.id === Id))[0].url;
  }
  
  const nextImage = () => {
    if(showedPictureId !== images.length){
      setShowedPictureId(prevValue => prevValue + 1)
    }
  }
  
  const previousImage = () => {
    if(showedPictureId !== 1){
      setShowedPictureId(prevValue => prevValue - 1)
    }
  }

  return (
    <div className="relative scroll-smooth font-mono " >
      <Navbar></Navbar>
      {galleryMode && 
      <div className="z-40 flex justify-center content-center bg-white overscroll-none sticky top-0">
        <button onClick={previousImage} className="h-screen w-fit">
          <span className='p-4 bg-red-200 text-white m-2 rounded-full'>{'<'}</span>
        </button>
        <button onClick={()=>{setGalleryMode(prevValue => !prevValue)}} className="absolute top-5 left-0">
          <span className='p-4 bg-red-200 text-white m-2 rounded-full'>x</span>
        </button>
        <img src={filterImagesByCurrentId(showedPictureId)} className="min-h-1/4 max-h-screen w-3/4"/>
        <button onClick={nextImage} className="h-screen w-fit">
          <span className='p-4 bg-red-200 text-white m-2 rounded-full'>{'>'}</span>
        </button>
      </div>
      }
      <About></About>
      <Gallery showGallery={showGallery}></Gallery>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
