/**
 * Based on status, there will be different buttons, here props callback used to handle 
 * changes on Parent component
 */

 import React, {  Component } from "react";


 import "./service-card-actions.scss";

 export class PendingRequestAction extends Component{


  handleAcceptRequest = (e) => {
    e.preventDefault();
    const { acceptRequestAction } = this.props;
    acceptRequestAction();
  }

   render(){

    const { data } = this.props;
    const { customer={} } = data;
    const { availability, address } = customer;

     return(
       <div className="service__card__action">
         <div className="body__content service__body__content">
           {/* Date and Time */}
           <div className="media media__date">
             <div className="media-left mr-2">
              <span className="fa fa-clock media__icon"></span>
             </div>
             <div className="media-body">
              <ul className="service__body__date">
                {
                  availability.map((item, index) => {
                    return (
                      <li>
                        <div className="row">
                          <div className="col-12 col-md-7 col-lg-7">
                            {
                              item.date
                            }
                          </div>
                          <div className="col-12 col-md-5 col-llg-5">
                            <p className="mb-0">
                              {item.start_time} - { item.end_time }
                            </p>

                          </div>
                        </div>
                      </li>
                    )
                  })
                }
                
              </ul>
             </div>
           </div>
           {/* end Date and Time */}
           {/* Location and Address */}
           <div className="media media__location">
             <div className="media-left mr-2 media__icon">
                <span className="fa fa-map-marker"></span>
             </div>
             <div className="media-body">
                {
                  address 
                }
             </div>
           </div>
           {/* end Location and Address */}
         </div>
         <div className="footer__button">
           <button className="btn btn-primary" onClick={ (e) => {
             this.handleAcceptRequest(e)
           }}>
            Accept Request 
           </button>
           <button className="btn btn-outline btn-outline-primary ml-2" onClick={e => this}>
            Reschedule 
           </button>
           <button className="btn btn-link text-center">
            <span className="fa fa-ellipsis-h"></span>
            <br/>
            More
           </button>
         </div>
       </div>
     )
   }
 }

export class ServiceRequestAction extends Component{

  handleCheckIn = () => {

  }

  generateInvoice = (e) => {
    e.preventDefault();
    this.props.generateInvoiceAction();
  }


  render(){
    const { data = {}} = this.props;
    const { customer = {}} = data;
    const { available, address, location } = customer;
    return(
      <div className="service__card__action">        
        <div className="service__body__content">
          <p className="mb-0 text-d-grey">
            Check in here or scan customer's QR Code to check in when 
            the service is about to start
          </p>
          <div className="media media__date">
            <div className="media-left mr-2">
              <span className="fa fa-clock media__icon"></span>
            </div>
            <div className="media-body">
              <ul className="service__body__date">
                {
                  available.map((item, index) => {
                    return (
                      <li>
                        <p className="mb-0">
                          {
                            item.time
                          },
                          {
                            item.date 
                          }
                        </p>
                      </li>
                    )
                  })
                }
                
              </ul>
            </div>
          </div>
          {/* Location and Address */}
          <div className="media media__location">
             <div className="media-left mr-2 media__icon">
                <span className="fa fa-map-marker"></span>
             </div>
             <div className="media-body">
                {
                  address 
                }
             </div>
           </div>
           {/* end Location and Address */}

        </div>
<div className="footer__button">
           <button className="btn btn-primary" onClick={ (e) => {
             this.handleCheckIn(e)
           }}>
            Check in 
           </button>
           <button className="btn btn-outline btn-outline-primary ml-2" onClick={e => this.generateInvoice(e)}>
            Generate Invoice 
           </button>
           <button className="btn btn-link text-center">
            <span className="fa fa-ellipsis-h"></span>
            <br/>
            More
           </button>
         </div>
      </div>
    )
  }
}

export class PaymentRequestAction extends Component{

  resendInvoice = (e) => {
    e.preventDefault();
  }

  startChat = (e) => {
    e.preventDefault();
  }


  render(){

    const { data = {}} = this.props;
    const { invoice } = data;

    return(
      <div className="service__card__action">
        <div className="service__body__content">
          <p className="mb-0 text-d-grey">Service is complete, please confirm payment amount:</p>
          <div className="content__list">
            <div className="media media__invoice">
              <div className="media-left mr-2">
                <span className="media__icon fa fa-money fa-money-bill"></span>
                </div>
                <div className="media-body">
                  <h6>Invoice Item:</h6>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <p>Session price</p>
                    </div>
                    <div className="col-12 col-md-6">
                      <p>
                        <span className="money-highlight">
                          $
                          { invoice.price }
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="footer__button">
           <button className="btn btn-outline-primary btn-outline" onClick={ (e) => {
             this.resendInvoice(e)
           }}>
            Resend Invoice 
           </button>
           <button className="btn btn-outline btn-outline-primary ml-2" onClick={e => this.startChat(e)}>
            Start a Chat 
           </button>
           <button className="btn btn-link text-center">
            <span className="fa fa-ellipsis-h"></span>
            <br/>
            More
           </button>
         </div>
      </div>
    )
  }
}




