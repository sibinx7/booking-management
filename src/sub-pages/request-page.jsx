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


  loadMoreData = (e) => {
    const { meta, fetchServices } = this.props;
    fetchServices((meta.page + 1))
  }

  static getDerivedStateFromProps(props, s){    
    let stateData = null;
    try{
      stateData = {};
    }catch(e){
      
    }
    return stateData;
  }


  render(){

    const { booking_requested, meta } = this.props;
    const has_more = meta.total > meta.loaded  

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
              <p className="mb-5 text-center no-more-data">No more service requests</p>
            ): <p className="mb- text-center">
              <button className="btn btn-sm btn-success" onClick = {
                e => this.loadMoreData(e)
              }>
                <span className="fa fa-plus"></span>&nbsp;
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

  let booking_requested = {};
  try{    
    booking_requested = booking.data.filter((item) => item.status === "PENDING");    
    // booking_requested = booking
  }catch(e){

  }
  return {
    booking_requested,
    meta: booking.meta 
  }
}

const mapDispatchToProps = ({booking:{fetchServices}}) => {
  return {
    fetchServices
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPage);