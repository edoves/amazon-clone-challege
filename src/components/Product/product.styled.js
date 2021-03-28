import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
export const Price = styled.span`
  font-weight: 500;
  margin-top: 30px;
`;
export const Rating = styled.div`
  display: flex;
`;

export const Brand = styled.span``;
export const Image = styled.img`
  max-height: 300px;
  object-fit: contain;
`;

export const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddToCartButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 2px solid #a88734;
  background-color: #f0c14b;
  border-radius: 2px;
`;
