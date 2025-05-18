"use client";

import { GalleriaLogo } from "../galleria-logo";
import { useScopedI18n } from "@/locales/client";
import { Button } from "../ui/button";

export function Header() {
  const t = useScopedI18n("header");

  return (
    <header
      data-testid="header"
      className="flex items-center justify-between py-6 px-4 xl:px-0 border-b"
    >
      <GalleriaLogo />
      <Button
        variant="ghost"
        className="uppercase text-start-slideshow-btn font-bold text-xs cursor-pointer"
      >
        {t("startSlideshow")}
      </Button>
    </header>
  );
}
