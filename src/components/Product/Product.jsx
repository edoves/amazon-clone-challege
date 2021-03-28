import React from "react";
// import data from "../../data";
import { db } from "../../firebase";
import {
  Container,
  Title,
  Price,
  Rating,
  Brand,
  Image,
  ActionSection,
  AddToCartButton,
} from "./product.styled";

const Product = ({ id, name, price, rating, brand, image }) => {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name,
          image,
          price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container key={id}>
      <Title>{name}</Title>
      <Price>{price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <p>⭐</p>
          ))}
      </Rating>
      <Brand>Brand: {brand}</Brand>
      <Image src={image} />
      <ActionSection onClick={addToCart}>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;
