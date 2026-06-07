"use client";
import React from "react";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-cyan-200 flex items-center justify-between">
      <div>
        <p>{feedback.message}</p>

        <p className="text-xs text-gray-500 mt-2">
          {new Date(feedback.date).toLocaleString()}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onUpdate(feedback._id)}
          className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(feedback._id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
