# Booking Management  System 

**Create React App** to generate react application. **Node-SASS** is use style.

### Live Demo

[Demo](https://booking-management-x777.herokuapp.com/) application live on **Heroku**. Most of the features can be find on this demo website.



### Application Details

This is a Booking management system, have 3 mail section Request, Service and Payment. Three of them are part of wizard or wizard like form.
Above this wizard section, there is an ads section which shows other services and user can use that also.
A Chat section is available incase user need furthor support.


### Application structure 


### Application 


### API Request issue
  > 
    Currently there is an little issue in API, It might be good to have multiple reducers or single reduce with a alternate logic might required, main issue on the load more section, On the first page, there will be latest 5 items, user can click on add more to load more data, if all are in `PENDING` state, and in the first page it will work accordingly, but on the second page, there might be zero or any number of cards, user can also click on load more, eventhough there is only or less than five cards, because we are filtering card based on status, this might be an issue, if we keep current logic, it might be good to remove load more or no response more status from Service and Payment tab, but in the design, it is there.
    