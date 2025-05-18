import { paintingsRepository } from "@/repositories/paintingsRepository";
import { PaintingCard } from "@/components/painting-card/painting-card";

export default async function HomePage() {
  const paintings = await paintingsRepository.getAll();

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 xl:px-0 p-4">
      {paintings.map((painting, index) => (
        <div key={painting.id} className="mb-4 break-inside-avoid">
          <PaintingCard painting={painting} index={index} />
        </div>
      ))}
    </div>
  );
}
