import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { Container, Banner, Content } from "./home.styled";
import { db } from "../../firebase";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProduct = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));

      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProduct();
    // const twoProduct = products.filter(({ product }) => {
    //   if (product.rating === 5) {
    //     return products.map(({ id, product }) => (
    //       <Product id={id} {...product} />
    //     ));
    //   } else {
    //     return product;
    //   }
    // });
  }, []);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        <ul className="featured__products">
          {products
            .filter(({ product }) => product.rating === 5)
            .map(({ id, product }) => (
              <Product id={id} {...product} />
            ))}
        </ul>
        <ul className="product__items">
          {products
            .filter(({ product }) => product.rating !== 5)
            .map(({ id, product }) => (
              <Product id={id} {...product} />
            ))}
        </ul>
      </Content>
    </Container>
  );
};

export default Home;
