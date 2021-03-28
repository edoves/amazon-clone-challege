import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
export const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.png");
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  min-height: 600px;
  z-index: -1;
`;
export const Content = styled.div`
  /* margin-top: -350px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 100;
  display: flex;
  flex-wrap: wrap; */
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -360px;

  .featured__products,
  .product__items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
`;
