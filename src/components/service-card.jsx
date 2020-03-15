import React,{  Component } from "react";


import "./service-card.scss";
import { ServiceCardProgress } from "./service-card-progress";

class ServiceCard extends Component{
  render(){

    const { data } = this.props;

    return(
      <div className="service__card">
        {/* Top Information Section */}
        {
          data.status
        }
        <ServiceCardProgress {...data}/>
        {/* end Top Information Section */}
        {/* User and Deal Information */}
        {/* end User and Deal Information */}
        {/* Dynamic section depend on Status */}        
        {/* end Dynamic section depend on Status */}
      </div>
    )
  }
}

export default ServiceCard;