import React, { Component } from "react";
import {connect} from "react-redux"
import ServiceCard from "../components/service-card";

/**
 * @todo This can be make single page, ie, 3 pages from one component,
 * and state and props change using router props
 */
class ServicesPage extends Component{
  loadMoreData = (e) => {
    const { meta, fetchServices } = this.props;
    fetchServices((meta.page + 1))
  }

  render(){
    const { booking_service, meta } = this.props;
    const has_more = meta.total > meta.loaded  

    return(
      <div className="sub__pages page__request">
        <div className="page__note">

        </div>
        <div className="service__list">
          <div className="service__card__wrapper">
          {
          booking_service.map((data, index) => {
            return <div className="service__card__item" key={index}>
              <ServiceCard data={data} key={index}/>
              </div>
          })
        }
          </div>        
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

  const booking_service = booking.data.filter((item) => item.status === "ACTIVE")

  return{
    booking_service,
    meta: booking.meta 
  }
}

const mapDispatchToProps = ({booking:{fetchServices}}) => {
  return {
    fetchServices
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);