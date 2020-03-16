import React, { Component } from "react";
import { Switch,Route, Redirect } from "react-router-dom";
import {  connect } from "react-redux";

import {  ServiceCarousel } from "../presentation/service-slider";
import { NavigationSlider } from "../common/navigation-slider";
import { mainRoutes } from "../routes";
class IndexPage extends Component{

  componentDidMount(){
    const { fetchServices } = this.props;
    /* Fetch call and get book services lists */
    fetchServices({page:1});
  }

  render(){
    return(
      <div className="container-wrapper">
      
        <div className="page__common">
          {/* Common Sections */}
          {/* Pagination Carousel */}
          <NavigationSlider/>
          {/* end Pagination Carousel */}
          {/* Service Carousel */}
          <ServiceCarousel/>
          {/* end Service Carousel */}
        {/* end Common Sections */}
        </div>        
        <div className="page__dynamic pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
              <Switch>
          {
            mainRoutes.reverse().map((route, index) => {

              let key = index;
              // Modify key if there any index issue 

              return <Route {...route} key={key}/>
            })
          }
          <Redirect to="/requests"/>
        </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({}) => {
  return {}
};

const mapDispatchToProps = ({booking:{fetchServices}}) => {
  return {
    fetchServices
  }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);