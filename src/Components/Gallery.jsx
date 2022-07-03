import * as React from 'react';
import images from '../Images/Images.js';

const Gallery = (props) => {
  const appendImagesToCategories = (imageData, categoryGenerated) => {
    let categories = categoryGenerated(imageData);

    let imagesGallery = categories.map((category) => {
      let filteredImages = imageData.filter(
        (image) => category === image.category
      );
      let mappedFilteredImages = filteredImages.map((image) => {
        return (
          <div
            className="w-2/4 h-fit md:max-w-sm md:h-max border-2 m-0 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            key={image.name}
          >
            <img
              src={image.url}
              alt={image.name}
              onClick={() => props.showGallery(image.id)}
            ></img>
          </div>
        );
      });
      return (
        <div
          id={category}
          key={category}
          className="static container pb-10 flex flex-wrap justify-center content-start space-y-10 border-b-4 md:space-x-10"
        >
          <p className="text-md p-4 md:text-2xl text-center basis-full md:p-10 bg-red-200 text-white rounded-b-md">
            {category}
          </p>
          {mappedFilteredImages}
        </div>
      );
    });
    return imagesGallery;
  };

  return (
    <div
      id="gallery"
      className="static container mx-auto flex flex-col justify-center content-start"
    >
      {appendImagesToCategories(images, props.getCategories)}
    </div>
  );
};

export default Gallery;
// static container flex flex-wrap justify-center content-start py-20 space-x-10 space-y-10 grid grid-flow-col auto-cols-max
