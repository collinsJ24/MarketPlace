import React, { useState, useEffect } from "react";
import './Gallery.css';
function Gallery (props) {

 const [gallery, setGallery] = useState([]);

 const fetchImages = async () => {
    return await fetch(
      "http://localhost:8080/gallery/images"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const galleryImages = data.map((images) => {
          return {
            image: images.image
          };
        });
        console.log(galleryImages);
        setGallery(galleryImages);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

return (
    <body>
        <h1></h1>

        <div className="gallery" id="gallery">
        {gallery.map((image) => (
            <div className="gallery-item">
                <div className="content"><img src={image.image} alt=""/></div>
            </div> ))}
        </div>

    </body>
    )
}

export default Gallery;