import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Product from "./components/Product/Product";
import ProductItems from "./components/ProductItems/ProductItems";

function RouterFunction() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/product" component={Product} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/ordersummary" component={OrderSummary} />
          <Route path="/product/:id" component={ProductItems} />
          <Route path="*" component={() => <h2>404 Not Found </h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterFunction;
