"use client";
import React, { use } from "react";
import { FoodCardCont } from "../../context/FoodCardContext";

const CardItems = () => {
  const { cart, addToCart } = use(FoodCardCont);
  const totalPrice = cart.reduce((sum, crt = []) => {
    return sum + crt.price;
  }, 0);
  return (
    <div>
      <p className="text-center text-xl my-5 underline">
        Add to cart items: {cart.length}{" "}
      </p>
      <div>
        {cart.map((item) => (
          <div
            className="flex items-center justify-between py-3"
            key={item?.id}
          >
            <span>{item?.title}</span>
            <span>$ {item?.price}</span>
          </div>
        ))}
        <hr />
        <p className="flex items-center justify-between text-orange-500 font-bold py-2">
          <span>Total Amount</span> <span>$ {totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default CardItems;
