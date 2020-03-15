import React from "react";
import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css"


import ServiceData from "../database/services.json"
import { ServiceItem } from "./service-item";


console.log(ServiceData);

const settings = {
  dots: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 2,
  autoHeight: true,
  adaptiveHeight: true,
  responsive:[    
    {
      breakpoint: 768,
      settings:{
        slidesToShow: 1
      }
    },
    {
      breakpoint: 992,
      setiings:{
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1200,
      settings:{
        slidesToShow: 2
      }
    }    
  ]
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