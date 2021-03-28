import React from "react";

import styled from "styled-components";

const CartItem = ({ id, item }) => {
  console.log(id);
  let options = [];

  for (let i = 0; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(<option value={i}> Qty: {i}</option>);
  }

  return (
    <Container key={id}>
      <ImageContainer src={item.image} />
      <CartItemInfo>
        <CartItemInfoTop>{item.name}</CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>
            <select value={item.quantity}>{options}</select>
          </CartItemQuantityContainer>
          <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>${item.price}</CartItemPrice>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const ImageContainer = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const CartItemInfoTop = styled.h2`
  color: #007185;
  font-size: 18px;
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
    &:focus {
      outline: none;
    }
  }
`;

const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;

const CartItemPrice = styled.p`
  font-size: 45px;
  font-weight: 700;
  margin-left: 16px;
`;
