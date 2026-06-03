const ReviewsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4 animate-pulse">
      {/* Heading Skeleton */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="h-10 w-72 bg-gray-300 rounded mx-auto mb-5"></div>

        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded mx-auto"></div>
        </div>
      </div>

      {/* Cards Skeleton */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md border border-gray-100"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-gray-300"></div>

                <div className="space-y-2">
                  <div className="h-5 w-32 bg-gray-300 rounded"></div>
                  <div className="h-4 w-44 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-2 mb-5">
                <div className="h-5 w-5 rounded bg-gray-300"></div>
                <div className="h-5 w-5 rounded bg-gray-300"></div>
                <div className="h-5 w-5 rounded bg-gray-300"></div>
                <div className="h-5 w-5 rounded bg-gray-300"></div>
                <div className="h-5 w-5 rounded bg-gray-300"></div>
              </div>

              {/* Review */}
              <div className="space-y-3 mb-6">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>

                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewsSkeleton;
