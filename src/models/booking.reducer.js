import {  ServiceAPI } from "../apis/requests/service.api";
let bookingData = [];



export const booking = {
  state:bookingData,
  reducers:{
    setBooking(state, payload){
      return [...state, ...payload];
    },
    updateBooking(state,payload){

    },
    changeStatus(state, payload){
      const { data, status } = payload;
      const findUpdatedIndex = state.findIndex((item) => {
        return item.id === data.id;
      })

      state[findUpdatedIndex] = {
        ...state[findUpdatedIndex],
        ...data,
        status  
      }
      return [...state]        
    },
    removeBooking(state, payload){
      return [];
    }
  },
  effects: (dispatch) => ({
    async fetchServices(payload, rootState){
      ServiceAPI.getServices()
        .then((response) => {
          console.log(response)
          console.log("AXIOS called...")
          dispatch.booking.setBooking(response);
        }, (error) => {

        })
    }
  })
}