import React from "react";
import dayjs from "dayjs"

import {  getCurrentStatus } from "../helpers/common.helpers";

import {  ServiceProgress } from "../presentation/service-progress"


export  const ServiceCardProgress = ({status, date}) => {

  const dayFormat = dayjs(date).format("h:mm a, D/MM/YYYY")
  

  return (
    <div classname="service__card__progress">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="service__status">
            <h4>{getCurrentStatus(status)}</h4>
          </div>
          <div className="service__date__time">
            <span>{dayFormat}</span>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <ServiceProgress/>
        </div>
      </div>
    </div>
  )
}

