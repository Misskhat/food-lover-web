import React from "react";
import FoodCard from "../../component/card/FoodCard";
import { FoodCardCont } from "../../context/FoodCardContext";
import CardItems from "./CardItems";
import InputSearch from "../../component/InputSearch";

const Foods = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const getFoods = async (search) => {
    const response = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    );
    const data = await response.json();
    return data.foods || [];
  };

  const foods = await getFoods(search);
  return (
    <div>
      <h2 className="text-4xl font-semibold">
        Total <span className="text-yellow-400">{foods.length}</span> Foods
        Found
      </h2>
      <InputSearch></InputSearch>
      <div className="flex gap-5">
        <div className="grid grid-cols-3 gap-3 my-5 flex-1">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="border-3 border-amber-400 p-4 rounded my-5 bg-amber-100">
          <h5 className="text-xl">Cart Items</h5>
          <hr />
          <CardItems></CardItems>
        </div>
      </div>
    </div>
  );
};

export default Foods;
