import React, { Component } from "react";
import {  ServiceCarousel } from "../presentation/service-slider";
import { NavigationSlider } from "../common/navigation-slider";
import { Switch,Route, Redirect } from "react-router-dom";
import { mainRoutes } from "../routes";
class IndexPage extends Component{

  componentDidMount(){

  }

  render(){
    return(
      <div>
        {/* Common Sections */}
          {/* Pagination Carousel */}
          <NavigationSlider/>
          {/* end Pagination Carousel */}
          {/* Service Carousel */}
          <ServiceCarousel/>
          {/* end Service Carousel */}
        {/* end Common Sections */}
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
    )
  }
}


const mapStateToProps = ({}) => {
  return {}
};

const mapDispatchToProps = ({}) => {
  return {

  }
}
 

export default connect()(IndexPage);