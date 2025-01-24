import { FaLocationDot } from "react-icons/fa6";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import { filterOptions, properties } from "../../data";
import "./Properties.css";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Properties = () => {
  
  const navigate =useNavigate()

  const handelNavigate = (id)=>{
    navigate(`/Properties/${id}`)
  }
  return (
    <div>
      <Navbar />
      <Hero style={{ height: "auto" }} />
      <div className="container">
        <div className="sidebar">
          <h3>Filter By</h3>
          {filterOptions.map((filter) => (
            <div key={filter.id} className="filter-section">
              <label>{filter.title}:</label>
              <div className="filter-section-wrapper">
                {filter.options.map((option) => (
                  <label key={option}>
                    <input type="checkbox" />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="properties-container">
          <div className="properties">
            {properties.map((property) => (
              <div className="card-container" key={property.id} onClick={()=> handelNavigate(property.id)}>
                <img src={property.image} alt="" className="card-image" />
                <div className="card-badge">
                  <span>{property.title}</span>
                </div>
                <div className="card-content">
                  <span className="card-type"> {property.type}</span>
                  <span className="card-price"> {property.price}</span>
                  <span className="card-address">
                    <FaLocationDot className="card-icon" />
                    {property.address}
                  </span>
                  <div className="card-rooms">
                    <span>
                      <LuBedDouble className="card-icon" />
                      {property.bedrooms}
                    </span>
                    <span>
                      <PiBathtub className="card-icon" />
                      {property.bathrooms}
                    </span>
                    <span>
                      <BiArea className="card-icon" />
                      {property.size} (sqm)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
