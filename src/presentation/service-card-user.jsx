import React, { useMemo, Fragment } from "react";
import { ShakeHand } from "../assets/svgs/shake-hand.svg";

import "./service-card-user.scss";

export const ServiceCardUser = ({ customer, previous_deals }) => {
  const previousDealComponent = useMemo(() => {
    return (
      <div className="media">
        <div className="media-left">
          <ShakeHand/>
        </div>
        <div className="media-body">
          You both had {previous_deals} deals before 
        </div>
      </div>
    )
  }, [previous_deals]);

  const { personal=null, location} = customer;  
  if(!personal) return <Fragment/>

  const { full_name, profile_image} = personal;
  
  const profilePath = require(`../assets/images/customer/${profile_image}`);

  return(
    <div className="card__user">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="media user__media">
            <div className="media-left mr-3">
              <picture>
                <img src={profilePath} alt={`${full_name}`} className="img-circle"/>
              </picture>
            </div>
            <div className="media-body">
              <h5 className="media-title">{full_name}</h5>
              <p className="media-description"><b>{location}</b></p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {
            previousDealComponent
          }
        </div>
      </div>
    </div>
  )
}