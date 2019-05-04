import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
      <React.Fragment>
         <Navbar/> {/*It is not included inside the <Switch> because we want to show the navbar in every rendered page*/}

          <Switch>
              <Route path="/" exact component={ProductList}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>

              <Route component={PageNotFound}/> {/*To catch all the unknown route*/}
          </Switch>

      </React.Fragment>
  );
}

export default App;
