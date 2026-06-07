"use client";

import { useEffect, useState } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import ReviewsSkeleton from "./ReviewsSkeleton";
import Image from "next/image";
import { Anek_Bangla } from "next/font/google";

const anek = Anek_Bangla({
  weight: "400",
});

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);

  if (loading) return <ReviewsSkeleton></ReviewsSkeleton>;

  return (
    <div className={`min-h-screen bg-gray-50 py-14 px-4 ${anek.className}`}>
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
          Customer Reviews
        </h1>

        <p className="text-gray-600 leading-8">
          See what our happy customers are saying about their food experience,
          restaurant environment, and favorite dishes from our menu.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-14 h-14">
                <Image
                  width={56}
                  height={56}
                  src={review.photo}
                  alt={review.user}
                  className="rounded-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {review.user}
                </h2>

                <p className="text-sm text-gray-500">{review.email}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(review.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-lg" />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-8 mb-6">{review.review}</p>

            {/* Bottom */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              {/* Likes */}
              <div className="flex items-center gap-2 text-gray-500">
                <FaRegHeart className="text-red-500" />

                <span>{review.likes.length} Likes</span>
              </div>

              {/* Date */}
              <p className="text-sm text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
