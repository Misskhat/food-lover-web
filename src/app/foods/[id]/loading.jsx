const FoodDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 animate-pulse">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Image Skeleton */}
          <div className="h-[350px] md:h-[500px] bg-gray-300"></div>

          {/* Right Content Skeleton */}
          <div className="p-8 md:p-12">
            {/* Area */}
            <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>

            {/* Title */}
            <div className="space-y-3 mb-6">
              <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
            </div>

            {/* Description */}
            <div className="space-y-3 mb-8">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
            </div>

            {/* Price */}
            <div className="h-10 w-28 bg-gray-300 rounded mb-8"></div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="h-14 w-full sm:w-44 bg-gray-300 rounded-2xl"></div>
              <div className="h-14 w-full sm:w-44 bg-gray-300 rounded-2xl"></div>
            </div>

            {/* Extra Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-2xl p-5 space-y-3">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-6 w-32 bg-gray-300 rounded"></div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5 space-y-3">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-6 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
