import React from "react";
import images from '../Images/Images'

let imagesGallery = images.map(
  image => {
    return(
    <div className="max-w-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" key={image.name}>
      <img src={image.url} alt={image.name}></img>
    </div>
    )
  }
)
const Gallery = ()=>{
  return(
    <div id="gallery" className="relative container mx-auto flex flex-wrap justify-center content-start py-20 space-x-10 space-y-10">
      {imagesGallery}
    </div>
  )
}

export default Gallery;