import React, { useState } from "react";

import headerLogo from "../assets/images/trova_logo.png"

export const MainHeader = () => {


  const [activeForm, setActiveForm] = useState(false);

  const handleSubmit = () => {

  }

  const resetSearchForm = (e) => {
    e.preventDefault();
    setActiveForm(false);
  }

  const handleSearchButtonClick = (e) => {    
    if(!activeForm){
      setActiveForm(true);
      e.stopPropagation();
      e.preventDefault();    
      return false;
    }else{
      // Continue event 
    }
  }

  return(    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="d-none d-block-md">
        <button className="btn btn-default">
          <span className="fas fa-search"></span>
        </button>
        <a href="">
          <img src={headerLogo} alt="Main header logo"/>
        </a>
        <button type="" className="">
          <span className="fas fa-comment"></span>
        </button>
        <button>
          <span className="fas fa-bell"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand ml-0 d-none d-lg-block" href="#">
            <img src={headerLogo} className="logo-lg-36" alt="Trova"/>
          </a>
          <ul className="navbar-nav mr-auto ml-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group">
                  {
                    activeForm &&  <input type="text" className="form-control"/>
                  }                  
                  <div className="input-group-append">
                   {
                     activeForm && (
                       <button classname="btn btn-default" onClick={e => resetSearchForm(e)}>
                         <span className="fa fa-times"></span>
                       </button>
                     )
                   } 
                  <button className="btn btn-default" onClick={e => handleSearchButtonClick(e)}>
                    <span className="fa fa-search"></span>
                  </button>
                  </div>
                </div>
              </form>
              
            </li>            
          </ul>
          <a className="navbar-brand mr-auto ml-auto d-block d-lg-none" href="#">Navbar</a>
          <ul className="navbar-nav ml-auto mr-0">
            <li className="nav-item active">
              <a className="nav-link notification-present" href="#">
                <span className="fa fa-comment"></span>                  
                <span className="notification--red circle"></span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link notification-present" href="#" data-toggle="dropdown" >
                <span className="fa fa-bell"></span>
                <span className="notification--red circle"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-notification">
                <div className="dropdown-item">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci officia libero suscipit quia optio? Corporis eaque deleniti et dolore, illo vel eveniet at veniam aperiam, similique quasi, dignissimos facere.
                </div>
                <div className="dropdown-item">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime perspiciatis reiciendis aut repudiandae officia harum dolorem voluptatem quibusdam voluptas unde consequuntur eum magni animi porro ad ab, temporibus ducimus? Obcaecati?
                </div>
                <div className="dropdown-item">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, aperiam iure minus dignissimos reiciendis aspernatur molestiae earum doloribus beatae delectus esse optio quod nostrum numquam nisi harum, tempora, atque corrupti.
                </div>
              </div>
            </li>            
          </ul>
        </div>
      </nav>
  )
}