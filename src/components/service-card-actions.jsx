/**
 * Based on status, there will be different buttons, here props callback used to handle 
 * changes on Parent component
 */

 import React, {  Component } from "react";


 export class PendingRequestAction extends Component{


  handleAcceptRequest = (e) => {
    e.preventDefault();
    const { acceptRequestAction } = this.props;
    acceptRequestAction();
  }

   render(){
     return(
       <div className="service__card__action">
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
    return(
      <div className="service__card__action">
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
    return(
      <div className="service__card__action">
        <div className="footer__button">
           <button className="btn btn-primary btn-primary" onClick={ (e) => {
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




