"use client";

import { GalleriaLogo } from "../galleria-logo";
import { useScopedI18n } from "@/locales/client";
import { Button } from "../ui/button";

export function Header() {
  const scopedT = useScopedI18n("header");

  return (
    <header
      data-testid="header"
      className="flex items-center justify-between p-6 border-b text-gray-500 font-bold text-xs"
    >
      <GalleriaLogo />
      <Button variant="ghost" className="uppercase">
        {scopedT("startSlideshow")}
      </Button>
    </header>
  );
}
