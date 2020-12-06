import './App.css';

import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Navbar'
import { Navbar } from 'react-bootstrap';

import ExplorePage from "./components/explore.component";
import ItemsPage from "./components/items.component";
import ProductPage from "./components/product.component";
import CartPage from "./components/cart.component";
import CheckoutPage from "./components/checkout.component";


class App extends Component{
  render(){
    return(
      <Router>

      <div className="container">
         <Navbar bg='dark' variant='dark' expand="xl" >
        
         <Navbar.Brand class="heading" href="/">SHOPPING WEBSITE</Navbar.Brand>

          <Navbar.Collapse className="justify-content-end" >
            <Link  to="/" class="link">Explore</Link>
          </Navbar.Collapse>

           <Nav>
            <Link to="/cart" class="link">Cart</Link>
           </Nav>
           
         </Navbar>
          <br/>

        <Route path='/' exact component={ExplorePage}></Route>
        <Route path='/kurtis' component={ItemsPage}></Route>
        <Route path='/sarees' component={ItemsPage}></Route>
        <Route path='/jeans' component={ItemsPage}></Route>
        <Route path='/tops' component={ItemsPage}></Route>
        <Route path='/product' component={ProductPage}></Route>
        <Route path='/cart' component={CartPage}></Route>
        <Route path='/checkout' component={CheckoutPage}></Route>

      </div>

      </Router>
     
    );
  }
}

export default App; 


