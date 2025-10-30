export default function LoadingPortfolio() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-muted/50 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-muted/50 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Top Projects Header Skeleton */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-6 w-6 bg-muted/50 rounded-full animate-pulse" />
            <div className="h-6 w-48 bg-muted/50 rounded-lg animate-pulse" />
          </div>
          <div className="h-10 w-64 bg-muted/50 rounded-lg mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-muted/50 rounded-lg animate-pulse" />
        </div>

        {/* Bento Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          <div className="lg:col-span-2 lg:row-span-2 bg-muted/50 rounded-2xl animate-pulse" />
          <div className="lg:col-span-2 lg:row-span-1 bg-muted/50 rounded-2xl animate-pulse" />
          <div className="lg:col-span-2 lg:row-span-1 bg-muted/50 rounded-2xl animate-pulse" />
          <div className="lg:col-span-2 lg:row-span-2 bg-muted/50 rounded-2xl animate-pulse" />
          <div className="lg:col-span-2 lg:row-span-1 bg-muted/50 rounded-2xl animate-pulse" />
        </div>

        {/* More Projects Section Skeleton */}
        <div className="mt-32">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-muted/50" />
            <div className="h-10 w-48 bg-muted/50 rounded-lg animate-pulse" />
            <div className="h-px flex-1 bg-muted/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-muted/50 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
