import React from "react";
import {classnames} from "classnames";
import "./service-progress";

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


  const isRequestClass = classnames({
    "request-active": isRequest
  });

  const isServiceClass = classnames({
    "service-active": isService
  });

  const isPaymentClass = classnames({
    "payment-active": isPayment
  })



  return (
    <div className="service__progress">
      <div className="service__info">

      </div>
      <div className="service__progress">
        <ul className="service__progress__list">
          <li className={isRequestClass}>
            <div className="service__progress__item"><h6>Request</h6>
            </div>
          </li>
          <li className={isServiceClass}>
<div className="service__progress__item">
              <h6>Service</h6>
            </div>
          </li>
          <li className={isPaymentClass}>
          <div className="service__progress__item">
              <h6>Payment</h6>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}