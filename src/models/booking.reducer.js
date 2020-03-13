import {  ServiceAPI } from "../apis/requests/service.api";
let bookingData = {};



export const booking = {
  state:bookingData,
  reducers:{
    setBooking(state, payload){
      return payload;
    },
    updateBooking(state,payload){

    },
    removeBooking(state, payload){
      return [];
    }
  },
  effects: (dispatch) => ({
    async fetchServices(payload, rootState){
      ServiceAPI.getServices()
        .then((response) => {
          dispatch.booking.setBooking(response);
        }, (error) => {

        })
    }
  })
}