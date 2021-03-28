import React from "react";
import { Container } from "./cart.styled";
import CartItems from "./CartItems/CartItems";
import CartTotal from "./CartTotal/CartTotal";

const Cart = ({ cartItems }) => {
  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal />
    </Container>
  );
};

export default Cart;
