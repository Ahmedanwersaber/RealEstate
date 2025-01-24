import React, { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Hero.css";
import { filterOptions } from "../../data";
import { useNavigate } from "react-router-dom";
const Hero = ({style}) => {
    const [activeButton, setactiveButton] = useState("buy");
    const [OpenFilter, setOpenFilter] = useState(null);
    const [SelectedOption, setSelectedOption] = useState(
        filterOptions.map((filter) =>  filter.options[0])
          
    );
    console.log("SelectedOption State:", SelectedOption);



    const handelButtonClicked = (buttonType) =>{
        setactiveButton(buttonType)
    }

    const handelFilterClick = (index) =>{
        setOpenFilter(OpenFilter === index ? null : index)
    }

    const handelOptionSelected = (filterindex , option) =>{
        const updatedOptions = [...SelectedOption];
        updatedOptions[filterindex] = option;
        setSelectedOption(updatedOptions);
        setOpenFilter(null);
    }

    const navigate =useNavigate()
    const handelNavegate =()=>{
        navigate("/properties")
    }
  return (
    <div className="hero" style={style}>
      <div className="hero-container">
        <h1>Find Your Perfect Home </h1>
        <p>Making Your Home Search Easy And Enjoyable</p>
        <div className="buttons-container">
          <button className={activeButton === "buy" ? "active" : ""} onClick={()=>handelButtonClicked("buy")}>Buy Properties</button>
          <button className={activeButton === "rent" ? "active" : ""} onClick={()=>handelButtonClicked("rent")}>Rent Properties</button>
        </div>
        <div className="hero-search-container">
          <div className="hero-search">
            <div className="hero-wrapper">
              <div className="filter">
                <div className="filter-container">
                  <label>Location</label>
                  <div className="input-container">
                    <FaLocationDot />
                    <input type="text" placeholder="Enter Location" />
                  </div>
                </div>
              </div>
              {filterOptions.slice(0, 2).map((filter, index) => {
                return (
                  <div key={index} className="filter">
                    <div className="filter-container">
                      <div className="filter-content">
                        <label>{filter.title}</label>
                        <div className="input-container" onClick={()=>handelFilterClick(index)}>
                          <FaChevronCircleDown />
                          <span>{SelectedOption[index]}</span>
                        </div>
                        {
                            OpenFilter === index && (
                                <div className="options">
                                    {filter.options.map((option) =>{
                                        return(
                                            <label key={option} className="option-item" onClick={()=>handelOptionSelected(index, option)}>
                                                <span>{option}</span>
                                            </label>
                                        )
                                    })}
                                </div>
                            )
                        }
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="search" onClick={()=> handelNavegate()}>
                <div className="search-container">
                  <div className="search-content">
                    <label>Search</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
