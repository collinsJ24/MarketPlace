import React, { useState, useEffect } from "react";
import './Gallery.css';
import { useNavigate } from "react-router-dom";

import {reactLocalStorage} from 'reactjs-localstorage';

function Gallery (props) {

 const [gallery, setGallery] = useState([]);
 const navigate = useNavigate();

 const goToListing = (id) => {
 console.log("clicked listing wit id " + id);
 console.log(id);
          let listing = gallery.filter((e) => e.id === id);
           console.log(listing);
    navigate('/listing',{state:listing});
 }

 const fetchImages = async () => {
 if(reactLocalStorage.getObject('listings') === null){
  console.log("fetching data");
    return await fetch(
      "http://localhost:8080/gallery/listings"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const galleryImages = data.map((listing) => {
          return {
            id: listing.id,
            image: listing.url,
            featured: listing.featured,
            description: listing.description
          };
        });
        setGallery(galleryImages);
        reactLocalStorage.setObject('listings', galleryImages);
      });
      }
     else{
     console.log("setting data from local storage");
     setGallery(reactLocalStorage.getObject('listings'));

     }
  };

  useEffect(() => {
    fetchImages();
  }, []);

return (
<div>
    <body>
        <h1></h1>

         <div className="galleryFeatured" id="galleryFeatured">
          {gallery.filter(listing => listing.featured === true).map(featured => (
            <div className="gallery-item-featured">
               <div className="content-featured"><img onClick={() => goToListing(featured.id)} src={featured.image} alt=""/>
                <div className="listing-description">{featured.description}</div>
                </div>

               </div>
          ))}
        </div>
        <div className="gallery" id="gallery">
       {gallery.filter(listing => listing.featured === false).map(nonFeatured => (
            <div className="gallery-item">
                <div className="content"><img src={nonFeatured.image} onClick={() => goToListing(nonFeatured.id)} alt=""/>
                 <div className="listing-description">{nonFeatured.description}</div>
                 </div>
            </div> ))}
        </div>

    </body>
    </div>
    )
}

export default Gallery;