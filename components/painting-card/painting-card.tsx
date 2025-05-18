import Image from "next/image";

import type { Painting, Image as ImageType } from "@/drizzle-db/schema";
import { THUMBNAILS_HEIGHT } from "@/constants/images";
import { NAV_LINKS } from "@/constants/nav";
import { MotionLink } from "../motion-wrapper";

type PaintingCardProps = {
  painting: Painting & { images: ImageType[] };
  index: number;
};

export function PaintingCard({ painting, index }: PaintingCardProps) {
  const thumbnailHeight =
    THUMBNAILS_HEIGHT[painting.id as keyof typeof THUMBNAILS_HEIGHT] || 300;

  return (
    <MotionLink
      data-testid="painting-card"
      href={NAV_LINKS.PAINTING(painting.name)}
      key={painting.id}
      className="block relative m-auto overflow-hidden group border"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Image
        src={painting.images[0].url}
        alt={painting.name}
        width={393}
        height={thumbnailHeight}
        className="group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
        <h3 className="text-2xl font-bold">{painting.name}</h3>
        <p className="text-xs opacity-70">{painting.artist}</p>
      </div>
    </MotionLink>
  );
}
