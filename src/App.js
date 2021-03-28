import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";

import { db } from "./firebase";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      let tempCartItems = [];

      tempCartItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempCartItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
