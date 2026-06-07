import React, { use } from "react";
import Add2CartButton from "../../../component/buttons/Add2CartButton";
import { FoodCardCont } from "../../../context/FoodCardContext";
import Image from "next/image";

const getFoodDetails = async (id) => {
  const response = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await response.json();
  return data.details;
};

const FoodPageDetails = async ({ params }) => {
  const { id } = await params;
  const foodDetails = await getFoodDetails(Number(id));
  const { title, foodImg, price, category, area, video } = foodDetails;
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side Image */}
          <div className="relative h-[350px] md:h-[500px]">
            {/* <img
              src={foodImg}
              alt={title}
              className="w-full h-full object-cover"
            /> */}
            <Image
              width={300}
              height={450}
              src={foodImg}
              alt={title}
              className="w-full h-full object-cover"
            ></Image>

            {/* Category Badge */}
            <div className="absolute top-5 left-5">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {category}
              </span>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {/* Area */}
            <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">
              {area} Cuisine
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
              {title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-8 mb-8">
              Enjoy this delicious and healthy {title} made with fresh,
              high-quality ingredients and rich flavors. Perfect for food lovers
              who want a satisfying meal with a modern taste. Carefully prepared
              to deliver both nutrition and incredible flavor in every bite.
            </p>

            {/* Price */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-orange-500">${price}</h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg hover:shadow-orange-200">
                Add To Cart
              </button> */}
              <Add2CartButton food={foodDetails}></Add2CartButton>

              <a
                href={video}
                target="_blank"
                rel="noreferrer"
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 text-center"
              >
                Watch Recipe
              </a>
            </div>

            {/* Extra Info */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-gray-100 rounded-2xl p-5">
                <p className="text-gray-500 text-sm mb-1">Food Category</p>

                <h3 className="text-lg font-bold text-gray-800">{category}</h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <p className="text-gray-500 text-sm mb-1">Origin Country</p>

                <h3 className="text-lg font-bold text-gray-800">{area}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPageDetails;
