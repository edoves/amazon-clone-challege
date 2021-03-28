import React from "react";
import CartItem from "./CartItem";
import { Container, Title, ItemsContainer } from "./cartitems.styled";

const CartItems = ({ cartItems }) => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;
