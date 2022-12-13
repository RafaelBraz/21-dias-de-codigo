import React, { useState } from 'react';
import './Gallery.css';

interface GalleryProps {
  images: string[]
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="container">
      <div className="content">
        <div className="imageContainer">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>

      <div className="images">
        {
          images.map((image, idx) => (
            <div
              className="imageContainer"
              onClick={() => setSelectedImage(idx)}
            >
              <img
                role="button"
                src={image}
                alt=""
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}