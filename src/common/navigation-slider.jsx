import React from "react";
import Slider from "react-slick";

import { Link, NavLink } from "react-router-dom";

import "./navigation-slider.scss"


const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive:[
    {
      breakpoint: 576,
      settings:{
        arrows: true,
        dots: false,
      }
    }
  ]
}

export const NavigationSlider = () => {
  return(
    <div className="navigation__slider">
      <Slider {...settings}>
        <div className="nav-link">
          <NavLink to={"requests"}>
            Requests
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="services">
            Services
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="payments">
            Payments
          </NavLink>
        </div>
      </Slider>
    </div>
  )
}