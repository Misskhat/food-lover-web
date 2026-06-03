import Link from "next/link";
import React from "react";
import Add2CartButton from "../buttons/Add2CartButton";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, category, price } = food;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-gray-100">
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full mb-3">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h2>

        {/* Price */}
        <p className="text-lg font-semibold text-orange-500 mb-5">${price}</p>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-3">
          <Add2CartButton food={food}></Add2CartButton>

          <Link href={`/foods/${id}`} className="w-full">
            <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2 rounded-xl transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
