export const SkeletonLoader = () => (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-0 space-y-6 animate-pulse">
        <div className="h-8 bg-blue-700/50 rounded w-3/4"></div>
        <div className="space-y-3">
            <div className="h-4 bg-blue-700/40 rounded w-full"></div>
            <div className="h-4 bg-blue-700/40 rounded w-5/6"></div>
            <div className="h-4 bg-blue-700/40 rounded w-4/6"></div>
        </div>
        <div className="h-32 bg-blue-700/30 rounded-md mt-6"></div>
    </div>
);
