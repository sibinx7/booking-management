import React from 'react';
import {Provider} from "react-redux";
import { init } from "@rematch/core"
import { BrowserRouter as Router } from "react-router-dom"


import './App.scss';


import models from "./models/index.reducer";
import { MainHeader } from './common/header';
import IndexPage from './pages';


const store = init({models})

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <MainHeader/>
        <IndexPage/>
     </div>
      </Router>      
    </Provider>    
  );
}

export default App;
