import { useState } from "react";
import "./Property.css";
import { useParams } from "react-router-dom";
import { amenities, properties, propertyImages } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { BiArea } from "react-icons/bi";

const Property = () => {
  const { id } = useParams();
  const property = properties.find((property) => property.id === parseInt(id));
  return (
    <div>
      <Navbar style={{ background: "rgba(8,22,55,0.9" }} />
      <div className="property-container">
        <div className="property-wrapper">
          <h1 className="property-heading">
            {property.type} for {property.title} in {property.address}
          </h1>
          <div className="property-images">
            <div className="main-image">
              <img src={propertyImages[0].image} alt="" />
            </div>
            <div className="small-images">
                {propertyImages.slice(1).map((image ,index)=>(
                    <img src={image.image} key={index} alt="" />
                ))}
            </div>
          </div>
          <div className="property-details">
            <h1>{property.price}</h1>
            <div className="property-rooms">
               <span>
                <LuBedDouble className="icon"/>
                <p>{property.bedrooms} Bedrooms</p>
               </span>
               <span>
               <PiBathtub className="icon"/>
               <p>{property.bathrooms} Bathrooms</p>
               </span>
               <span>
               <BiArea className="icon"/>
               <p>{property.size} (sqm)</p>
               </span>
            </div>
          </div>
          <div className="property-amenities">
             <h1>Amenities</h1>
             <div className="amenities">
              {amenities.map((item)=>(
                <div key={item.id} className="amenity">
                    <span className="icon">{item.icon}</span>
                    <span>{item.title}</span>
                </div>
              ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
