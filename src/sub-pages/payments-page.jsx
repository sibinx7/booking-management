import React, { Component } from "react";
import { connect } from "react-redux";
import ServiceCard from "../components/service-card";

class PaymentPage extends Component{
  render(){

    const { booking_payment} = this.props;
    return(
      <div className="sub__pages page__request">
        {
          booking_payment.map((data, index) => {
            return <ServiceCard data={data} index={index}/>
          })
        }
      </div>
    )
  }
}


const mapStateToProps = ({booking}) => {

  const booking_payment = booking.filter((item) => item.status === "PAYMENT")
  return {
    booking_payment
  }
}


export default connect(mapStateToProps, null)(PaymentPage);