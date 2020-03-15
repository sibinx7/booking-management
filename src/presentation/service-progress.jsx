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
              <CorrectSVG className="progress__icon"/>
              <span className="progress__number">1</span>
              </span> 
              <h6 className="p-title">Request</h6>
            </div>
          </li>
          <li className={isServiceClass}>
<div className="service__progress__item">
<span className="progress__circle">
              <CorrectSVG className="progress__icon"/>
              <span className="progress__number">2</span>
              </span> 
              <h6 className="p-title">Service</h6>
            </div>
          </li>
          <li className={isPaymentClass}>
          <div className="service__progress__item">
          <span className="progress__circle">
              <CorrectSVG className="progress__icon"/>
              <span className="progress__number">3</span>
              </span> 
              <h6 className="p-title">Payment</h6>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}