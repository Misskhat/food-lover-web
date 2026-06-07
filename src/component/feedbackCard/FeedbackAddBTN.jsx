"use client";

import Link from "next/link";

const FeedbackAddBTN = () => {
  const handleAdd = () => {
    console.log("test");
  };
  return (
    <div className="my-5">
      {/* Top Add Button */}

      <Link
        href={"/feedback/add"}
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Feedback
      </Link>
    </div>
  );
};

export default FeedbackAddBTN;
