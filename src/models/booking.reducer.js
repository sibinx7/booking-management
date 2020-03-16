import {  ServiceAPI } from "../apis/requests/service.api";
let bookingData = {
  data:[],
  meta:{}
};



export const booking = {
  state:bookingData,
  reducers:{
    setBooking(state, payload){
      return {...state, ...payload};
    },
    updateBooking(state,payload){
      const data = [
        ...state.data, ...payload.data
      ]
      const meta = {
        ...state.meta,
        ...payload.meta,
        loaded: (data.length)
      }

      return {
        data,
        meta 
      }

    },
    changeStatus(state, payload){
      const { data, status } = payload;
      const findUpdatedIndex = state.data.findIndex((item) => {
        return item.id === data.id;
      })

      state['data'][findUpdatedIndex] = {
        ...state.data[findUpdatedIndex],
        ...data,
        status  
      }
      return [...state]        
    },
    removeBooking(state, payload){
      return {
        data:[],
        meta:{}
      };
    }
  },
  effects: (dispatch) => ({
    async fetchServices(payload, rootState){
      const { page} = payload;

      ServiceAPI.getServices({per_page:5, page})
        .then((response) => {          
          if(page === 1){
            dispatch.booking.setBooking(response);
          }else{
            dispatch.booking.updateBooking(response);
          }
          
        }, (error) => {

        })
    }
  })
}