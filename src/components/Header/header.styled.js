import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const HeaderLogo = styled(Link)`
  margin-top: 16px;
  img {
    width: 100px;
  }
`;

export const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

export const OptionLineOne = styled.div``;
export const OptionLineTwo = styled.div`
  font-weight: 700;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

export const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: none;
  :focus {
    outline: none;
  }
`;

export const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNavItems = styled.div`
  display: flex;
`;

export const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
`;

export const HeaderOptionCart = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-left: 9px;
`;

export const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`;
