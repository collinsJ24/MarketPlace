import { useState } from 'react';
import './Filters.css';
const Filters = (props) => {


  const handleFilter = (e) => {
        console.log("filter is : ");
        console.log(e);
        props.filter(e);
  }

  return (
     <div class="container-large signed-out-masthead signed-out-hero js-signed-out-masthead">
       <div class="hero-categories filter-categories js-filter-categories js-shot-categories">
         <ul>
           <li class="hero-category category sets-path active">
             <a title="Discover" data-param="category" data-track-sub-nav="true">Discover</a>
           </li>
           <li class="hero-category category sets-path ">
             <a title="Animation" data-param="category" onClick={() => handleFilter("jobs")} data-value="animation" data-track-sub-nav="true" href="#">Animation</a>
           </li>
           <li class="hero-category category sets-path ">
             <a title="Branding" data-param="category" onClick={() => handleFilter("test")} data-value="branding" data-track-sub-nav="true" href="#">Branding</a>
           </li>
           <li class="hero-category category sets-path ">
             <a title="Illustration" data-param="category" data-value="illustration" data-track-sub-nav="true" href="#">Illustration</a>
           </li>
           <li class="hero-category category sets-path ">
             <a title="Mobile" data-param="category" data-value="mobile" data-track-sub-nav="true" href="#">Mobile</a>
           </li>
           <li class="hero-category category sets-path ">
             <a title="Print" data-param="category" data-value="print" data-track-sub-nav="true" href="#">Print</a>
           </li>
           <li class="hero-category category sets-path ">
             <a title="Product Design" data-param="category" data-value="product-design" data-track-sub-nav="true" href="#">Product Design</a>
           </li>
           <li class="hero-category category sets-path ">
             <a title="Typography" data-param="category" data-value="typography" data-track-sub-nav="true" href="#">Typography</a>
           </li>
           <li class="hero-category category sets-path ">
             <a title="Web Design" data-param="category" data-value="web-design" data-track-sub-nav="true" href="#">Web Design</a>
           </li>
         </ul>
       </div>
     </div>
  );
}

export default Filters;
