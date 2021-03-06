import React from "react";
import dayjs from "dayjs"

import {  getCurrentStatus } from "../helpers/common.helpers";

import {  ServiceProgress } from "../presentation/service-progress"


export  const ServiceCardProgress = ({status, date}) => {

  const dayFormat = dayjs(date).format("h:mm a, D/MM/YYYY")
  

  return (
    <div className="service__card__progress mb-4">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6">
          <div className="service__status">
            <h5 className="service__card__title">{getCurrentStatus(status)}</h5>
          </div>
          <div className="service__date__time">
            <span>{dayFormat}</span>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6">
          <ServiceProgress status={status}/>
        </div>
      </div>
    </div>
  )
}

