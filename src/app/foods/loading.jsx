import React from "react";
import FoodCardSkeleton from "../../component/skeleton/FoodCardSkeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-3 gap-3 my-5">
      {[...Array(12)].map((_, i) => (
        <FoodCardSkeleton key={i}></FoodCardSkeleton>
      ))}
    </div>
  );
};

export default Loading;
