import React, { Component } from "react";
import {  connect } from "react-redux";
import ServiceCard from "../components/service-card";


class RequestPage extends Component{


  componentDidUpdate(){

  }


  static getDerivedStateFromProps(props, s){
    console.log("On State")
    console.log(props)
    let stateData = null;
    try{
      stateData = {};
    }catch(e){
      
    }
    return stateData;
  }


  render(){

    const { booking_requested } = this.props;

    return(
      <div className="sub__pages page__request">        
        {
          booking_requested.map((data, index) => {
            let key = index;
            if(data.id){
              key = `${index}-${data.id}`;
            }
            return <ServiceCard data={data} key={key}/>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({booking}) => {

  let booking_requested = [];
  try{    
    booking_requested = booking.filter((item) => item.status === "PENDING");    
  }catch(e){

  }
  return {
    booking_requested
  }
}

const mapDispatchToProps = ({}) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPage);