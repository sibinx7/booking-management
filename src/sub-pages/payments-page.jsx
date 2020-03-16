import React, { Component } from "react";
import { connect } from "react-redux";
import ServiceCard from "../components/service-card";

class PaymentPage extends Component{
  loadMoreData = (e) => {
    const { meta, fetchServices } = this.props;
    fetchServices((meta.page + 1))
  }
  render(){

    const { booking_payment, meta} = this.props;
    const has_more = meta.total > meta.loaded  
    return(
      <div className="sub__pages page__request">
          <div className="service__card__wrapper">
          {
          booking_payment.map((data, index) => {
            return <div className="service__card__item" key={index}>
              <ServiceCard data={data} index={index}/>
              </div>
          })
        }
          </div>
          <div className="service__card__more">          
          {
            !has_more ? (
              <p className="mb-5 text-center no-more-data">No more service requests</p>
            ): <p className="mb- text-center">
              <button className="btn btn-sm btn-primary btn-default" onClick = {
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

  const booking_payment = booking.data.filter((item) => item.status === "PAYMENT")
  return {
    booking_payment,
    meta: booking.meta 
  }
}

const mapDispatchToProps = ({booking:{fetchServices}}) => {
  return {
    fetchServices
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);