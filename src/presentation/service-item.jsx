import React from "react";

import "./service-item.scss";



export const ServiceItem = ({ title, category, sub_category, description, price, specification, thumbnail}) => {

  const imagePath = require(`../assets/images/${thumbnail}`)

  return(
    <div className="service__item">
      <div className="service__image">
      <div className="service__image__bg" style={{backgroundImage: `url(${imagePath})`}}>
        <img src={imagePath} alt={title}/>
      </div>
      </div>
      <div className="service__content">
        <h4 className="title">{title}</h4>
        <h6 className="sub-category text-uppercase">
          <span>{category}</span>
          &nbsp;
          <span>{sub_category}</span>
        </h6>
        <p>
          {description}
        </p>
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="mb-0">{specification}</p>
          </div>
          <div className="col-12 col-md-6">
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}