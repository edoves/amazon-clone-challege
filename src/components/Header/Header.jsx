import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import {
  Container,
  HeaderLogo,
  HeaderOptionAddress,
  OptionLineOne,
  OptionLineTwo,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchIconContainer,
  HeaderNavItems,
  HeaderOption,
  HeaderOptionCart,
  CartCount,
} from "./header.styled";

const Header = () => {
  return (
    <Container>
      <HeaderLogo to="/">
        <img src={"https://i.imgur.com/7I9Was5.png"} alt="" />
      </HeaderLogo>
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>
      <HeaderSearch>
        <HeaderSearchInput type="input"></HeaderSearchInput>
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>
      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Dove</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Order</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart to="/cart">
          <ShoppingBasketIcon />
          <CartCount>4</CartCount>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

export default Header;
