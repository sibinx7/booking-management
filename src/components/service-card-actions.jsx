/**
 * Based on status, there will be different buttons, here props callback used to handle 
 * changes on Parent component
 */

 import React, {  Component } from "react";


 class PaymentRequestAction extends Component{


  handleAcceptRequest = (e) => {
    e.preventDefault();
  }

   render(){
     return(
       <div>


         <div className="footer__button">
           <button className="btn btn-primary" onClick={ (e) => {
             this.handleAcceptRequest(e)
           }}>
            Accept Request 
           </button>
         </div>
       </div>
     )
   }
 }