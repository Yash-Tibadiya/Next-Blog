import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingDashboard() {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Your Blog Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Skeleton className="size-8 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
