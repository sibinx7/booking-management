import React, { Component } from "react";
import {  connect } from "react-redux";


class RequestPage extends Component{
  render(){
    return(
      <div className="sub__pages page__request">
        
      </div>
    )
  }
}

const mapStateToProps = ({bookings}) => {

  const booking_requested = bookings.filter((item) => item.status === "PENDING")
  return {
    booking_requested
  }
}

const mapDispatchToProps = ({}) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPage);