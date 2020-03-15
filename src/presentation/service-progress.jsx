import React from "react";
import  * as classNames from "classnames";


import { CorrectSVG } from "../assets/svgs"
import "./service-progress.scss";

export const ServiceProgress = ({status, date}) => {

  let isRequest, isService, isPayment; 
  switch(status){
    case "PENDING":      
      break;
    case "ACTIVE":
      isRequest = true;
      break;
    case "PAYMENT":
      isService = isRequest = true;
      break;
    default:
      break;
  }


  const isRequestClass = classNames({
    "request-active": isRequest
  });

  const isServiceClass = classNames({
    "service-active": isService
  });

  const isPaymentClass = classNames({
    "payment-active": isPayment
  })



  return (
    <div className="service__progress">
      <div className="service__info">

      </div>
      <div className="service__progress">
        <ul className="service__progress__list">
          <li className={isRequestClass}>
            <div className="service__progress__item">
              <span className="progress__circle">
              <CorrectSVG/>
              <span>1</span>
              </span> 
              <h6>Request</h6>
            </div>
          </li>
          <li className={isServiceClass}>
<div className="service__progress__item">
<span className="progress__circle">
              <CorrectSVG/>
              <span>2</span>
              </span> 
              <h6>Service</h6>
            </div>
          </li>
          <li className={isPaymentClass}>
          <div className="service__progress__item">
          <span className="progress__circle">
              <CorrectSVG/>
              <span>3</span>
              </span> 
              <h6>Payment</h6>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}