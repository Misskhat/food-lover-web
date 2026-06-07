import { Roboto } from "next/font/google";
import React from "react";
import FeedbackCard from "../../component/feedbackCard/FeedbackCard";
import FeedbackAddBTN from "../../component/feedbackCard/FeedbackAddBTN";

const roboto = Roboto({
  weight: "400",
});

const getFeedbacks = async () => {
  const response = await fetch("http://localhost:3000/api/feedback", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return response.json();
};

const Feedback = async () => {
  const feedback = await getFeedbacks();
  console.log(feedback);
  return (
    <div className={`${roboto.className}`}>
      <h1 className="text-4xl font-bold">{feedback.length} Feedback Found</h1>
      <FeedbackAddBTN></FeedbackAddBTN>
      <div className="my-5 flex flex-col gap-5">
        {feedback.map((fd) => (
          <FeedbackCard key={fd._key} feedback={fd}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
