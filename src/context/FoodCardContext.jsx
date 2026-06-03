"use client";
import React, { createContext, useState } from "react";

export const FoodCardCont = createContext();
const FoodCardContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([item, ...cart]);
  };
  const cartInfo = { cart, addToCart };
  return <FoodCardCont value={cartInfo}>{children}</FoodCardCont>;
};

export default FoodCardContext;
