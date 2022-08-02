import React, { useState, useEffect } from "react";
import './Gallery.css';
function Gallery (props) {

 const [gallery, setGallery] = useState([]);

 const fetchImages = async () => {
    return await fetch(
      "http://localhost:8080/gallery/listings"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const galleryImages = data.map((images) => {
          return {
            image: images.url,
            featured: images.featured
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

         <div className="gallery2" id="gallery2">
          {gallery.filter(listing => listing.featured === true).map(featured => (
            <div className="gallery-item2">
               <div className="content2"><img src={featured.image} alt=""/></div>
               </div>
          ))}
        </div>
        <div className="gallery" id="gallery">
       {gallery.filter(listing => listing.featured === false).map(nonFeatured => (
            <div className="gallery-item">
                <div className="content"><img src={nonFeatured.image} alt=""/></div>
            </div> ))}
        </div>

    </body>
    )
}

export default Gallery;