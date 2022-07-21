import React from "react";
import Home from "../Ecart/Home";
import Footer from "../NavItems/Footer";
import Navbars from "../NavItems/Navbars";
import { CartProvider } from "react-use-cart";
import Cart from "../Ecart/Cart";
const Eshop = () => {
  return (
    <>
      <CartProvider>
        <Navbars />
        <Home />
        <Cart />
        <Footer />
      </CartProvider>
    </>
  );
};

export default Eshop;
