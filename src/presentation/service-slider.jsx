import React from "react";
import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css"


import ServiceData from "../database/services.json"
import { ServiceItem } from "./service-item";


console.log(ServiceData);

const settings = {
  dots: true,
  arrows: false
}
export const ServiceCarousel= ({}) => {
  return (
    <div className="service__wrapper">      
      <Slider {...settings}> 
        {
          ServiceData.map((item, index) => {
            return <ServiceItem key={index} {...item}/>
          })
        }
      </Slider>
    </div>
  )
}