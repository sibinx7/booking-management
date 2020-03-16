import React,{  Component, useMemo } from "react";


import "./service-card.scss";
import { ServiceCardProgress } from "./service-card-progress";
import { ServiceCardUser } from "../presentation/service-card-user";

import {PendingRequestAction, ServiceRequestAction, PaymentRequestAction} from "../components/service-card-actions"
import { connect } from "react-redux";

class ServiceCard extends Component{


  handleAcceptRequest = () => {
    const { data, changeBookingStatus } = this.props;
  
    changeBookingStatus({data, status:"ACTIVE"})
  }


  handleGenerateInvoice = () => {
    const { data, changeBookingStatus } = this.props;    
    changeBookingStatus({data, status:"PAYMENT"});
  }

  render(){

    const { data } = this.props;
    
    let dynamicActionComponent = <PendingRequestAction acceptRequestAction={ this.handleAcceptRequest }/>;
    switch(data.status){
      case "PENDING":
        dynamicActionComponent = <PendingRequestAction acceptRequestAction={ this.handleAcceptRequest }/>;
        break;
      case "ACTIVE":
        dynamicActionComponent = <ServiceRequestAction generateInvoiceAction={ this.handleGenerateInvoice}/>;
        break;
      case "PAYMENT":
        dynamicActionComponent = <PaymentRequestAction/>;
        break;
      default:      
        break;
    }

    return(
      <div className="service__card">
        {/* Top Information Section */}        
        <ServiceCardProgress {...data}/>
        {/* end Top Information Section */}
        {/* User and Deal Information */}
        <ServiceCardUser customer={data.customer}/>      
        {/* end User and Deal Information */}
        {/* Dynamic section depend on Status */}       
        {dynamicActionComponent} 
        {/* end Dynamic section depend on Status */}
      </div>
    )
  }
}


const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = ({booking:{ changeStatus }}) => {
  return {
    changeBookingStatus: changeStatus
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);