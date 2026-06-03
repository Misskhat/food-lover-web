"use client";

import { use, useState } from "react";
import { FoodCardCont } from "../../context/FoodCardContext";

const Add2CartButton = ({ food }) => {
  const { addToCart } = use(FoodCardCont);
  const [incart, setIncart] = useState(false);
  const handleadd2Cart = () => {
    setIncart(true);
    addToCart(food);
  };
  return (
    <button
      disabled={incart}
      onClick={handleadd2Cart}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl transition disabled:bg-gray-400"
    >
      {incart ? "Added" : "Add To Cart"}
    </button>
  );
};

export default Add2CartButton;
