import React, { useState, useEffect } from "react";
import './Gallery.css';
import Filters from "Search/Filters";
import { useNavigate } from "react-router-dom";

import {reactLocalStorage} from 'reactjs-localstorage';

function Gallery (props) {

//reactLocalStorage.clear();
console.log(reactLocalStorage.getObject('listings'));
const [filterData, setFilterData] = useState("");
const[filterSet, setFilterSet] = useState(false);
const[filteredData, setFilteredData] = useState([]);
const [gallery, setGallery] = useState([]);
console.log(gallery);
 const navigate = useNavigate();
console.log(filteredData);
 const filter_data = (data) => {
 console.log(data);
    setFilterData(data); // Filter data from Filters component
  }

if(filterData !== ""){
 setFilterSet(true);
 console.log(filterData);
 let data = gallery.filter((item) => item.category === filterData);
 setFilteredData(data);
 setFilterData("");
}

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
            description: listing.description,
            category: listing.category,
            location: listing.location
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
 <Filters  filter={filter_data}/>
    <body>
        <h1></h1>

          {!filterSet && (
         <div className="galleryFeatured" id="galleryFeatured">
          {gallery.filter(listing => listing.featured === true).map(featured => (
            <div className="gallery-item-featured">
               <div className="content-featured"><img onClick={() => goToListing(featured.id)} src={featured.image} alt=""/>
                <div className="listing-description">{featured.description}</div>
                </div>

               </div>
          ))}
        </div>
        )}

        {!filterSet && (
        <div className="gallery" id="gallery">
       {gallery.filter(listing => listing.featured === false).map(nonFeatured => (
            <div className="gallery-item">
                <div className="content"><img src={nonFeatured.image} onClick={() => goToListing(nonFeatured.id)} alt=""/>
                 <div className="listing-description">{nonFeatured.description}</div>
                 </div>
            </div> ))}
        </div>
         )}

           {filterSet && (
                 <div className="galleryFeatured" id="galleryFeatured">
                     {filteredData.map((filtered) => (
                     <div className="gallery-item-featured">
                         <div className="content-featured"><img src={filtered.image} onClick={() => goToListing(filtered.id)} alt=""/>
                          <div className="listing-description-featured">{filtered.description}</div>
                          </div>
                     </div>
                     ))}
                 </div>
                  )}

    </body>
    </div>
    )
}

export default Gallery;