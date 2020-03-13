import React from "react";

import headerLogo from "../assets/images/trova_logo.png"

export const MainHeader = () => {
  return(    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <button className="">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>            
          </ul>
          <a className="navbar-brand mr-auto ml-auto " href="#">Navbar</a>
          <ul className="navbar-nav ml-auto mr-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>            
          </ul>
        </div>
      </nav>
  )
}