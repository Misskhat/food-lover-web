import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 animate-pulse">
      {/* Image */}
      <div className="h-56 bg-gray-300"></div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="h-5 w-24 bg-gray-300 rounded-full mb-4"></div>

        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-3"></div>

        {/* Price */}
        <div className="h-5 w-20 bg-gray-300 rounded mb-5"></div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="h-10 w-full bg-gray-300 rounded-xl"></div>
          <div className="h-10 w-full bg-gray-300 rounded-xl    "></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
