import React,{  Component, useMemo } from "react";


import "./service-card.scss";
import { ServiceCardProgress } from "./service-card-progress";
import { ServiceCardUser } from "../presentation/service-card-user";

class ServiceCard extends Component{
  render(){

    const { data } = this.props;    

    return(
      <div className="service__card">
        {/* Top Information Section */}        
        <ServiceCardProgress {...data}/>
        {/* end Top Information Section */}
        {/* User and Deal Information */}
        <ServiceCardUser customer={data.customer}/>      
        {/* end User and Deal Information */}
        {/* Dynamic section depend on Status */}       
         
        {/* end Dynamic section depend on Status */}
      </div>
    )
  }
}

export default ServiceCard;