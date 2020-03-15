import React, { Component } from "react";
import {  connect } from "react-redux";
import ServiceCard from "../components/service-card";


class RequestPage extends Component{

  state = {
    page: 1,
    per_page: 5,
    has_more: true 
  }

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
    const { has_more } = this.state;

    return(
      <div className="sub__pages page__request">        
        <div className="service__card__wrapper">
        {
          booking_requested.map((data, index) => {
            let key = index;
            if(data.id){
              key = `${index}-${data.id}`;
            }
            return <div className="service__card__item" key={key}>
                <ServiceCard data={data} key={key}/>
              </div>
          })
        }
        </div>              
        <div className="service__card__more">
          {
            !has_more ? (
              <p className="mb-0">No more service requests</p>
            ): <p className="mb-0 text-center">
              <button className="btn btn-sm btn-default">
                <span className="fa fa-plus"></span>
                Load more
              </button>
            </p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({booking}) => {

  let booking_requested = [];
  try{    
    booking_requested = booking.filter((item) => item.status === "PENDING");    
    // booking_requested = booking
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