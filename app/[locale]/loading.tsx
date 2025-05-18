import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 xl:px-0 p-4">
      {Array.from({ length: 15 }).map((_, index) => {
        const randomHeight = Math.floor(Math.random() * 3) + 1;
        return (
          <Skeleton
            key={index}
            className={cn("w-full mb-4 break-inside-avoid", {
              "h-[550px]": randomHeight === 1,
              "h-[350px]": randomHeight === 2,
              "h-[250px]": randomHeight === 3,
            })}
          />
        );
      })}
    </div>
  );
}
