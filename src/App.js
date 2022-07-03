import About from './Components/About';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import images from './Images/Images.js';
import Contact from './Components/Contact';

import * as React from 'react';

function App() {
  const [showedPictureId, setShowedPictureId] = React.useState(1);
  const [galleryMode, setGalleryMode] = React.useState(false);

  const getCategories = (data) => {
    let categoriesSet = new Set();
    for (const element of data) {
      categoriesSet.add(element.category);
    }
    let categoriesArray = Array.from(categoriesSet);
    return categoriesArray;
  };

  const showGallery = (id) => {
    setGalleryMode((prevValue) => !prevValue);
    setShowedPictureId(id);
  };

  const filterImagesByCurrentId = (Id) => {
    return images.filter((obj) => obj.id === Id)[0].url;
  };

  const nextImage = () => {
    if (showedPictureId !== images.length) {
      setShowedPictureId((prevValue) => prevValue + 1);
    }
  };

  const previousImage = () => {
    if (showedPictureId !== 1) {
      setShowedPictureId((prevValue) => prevValue - 1);
    }
  };

  return (
    <div className="scroll-smooth font-mono ">
      
      {galleryMode && (
        <div
        className="fixed z-30 bg-red-50 flex w-screen lg:h-screen justify-center content-center ">
          <button onClick={previousImage} className="left-0 z-20 md:static h-screen w-1/6">
            <span className="p-4 bg-red-200 text-white m-2 rounded-full">
              {'<'}
            </span>
          </button>
          <div className='my-20'>
            <img
              src={filterImagesByCurrentId(showedPictureId)}
              alt=''
              className='max-h-full'
              onClick={()=>{
                setGalleryMode((prevValue) => !prevValue);
              }}
            />
          </div>
          <button onClick={nextImage} className="right-0 z-20 md:static h-screen w-1/6">
            <span className="p-4 bg-red-200 text-white m-2 rounded-full">
              {'>'}
            </span>
          </button>
        </div>
      )}
      <Navbar getCategories={() => getCategories(images)}></Navbar>
      <About></About>
      <Gallery
        showGallery={showGallery}
        getCategories={getCategories}
      ></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
