import React, { Component } from "react";
import {connect} from "react-redux"
import ServiceCard from "../components/service-card";

/**
 * @todo This can be make single page, ie, 3 pages from one component,
 * and state and props change using router props
 */
class ServicesPage extends Component{
  render(){
    const { booking_service } = this.props;

    return(
      <div className="sub__pages page__request">
        <div className="page__note">

        </div>
        <div className="service__list">
        {
          booking_service.map((data, index) => {
            return <ServiceCard data={data} key={index}/>
          })
        }
        </div>        
      </div>
    )
  }
}


const mapStateToProps = ({booking}) => {

  const booking_service = booking.filter((item) => item.status === "ACTIVE")

  return{
    booking_service
  }
}


export default connect(mapStateToProps, null)(ServicesPage);