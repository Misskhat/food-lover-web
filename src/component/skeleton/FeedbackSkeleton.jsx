export default function FeedbackSkeleton() {
  return (
    <div className="border rounded-lg p-4 animate-pulse bg-white">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/3 mt-3"></div>

      <div className="flex gap-2 mt-3">
        <div className="h-7 w-16 bg-gray-200 rounded"></div>
        <div className="h-7 w-16 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
